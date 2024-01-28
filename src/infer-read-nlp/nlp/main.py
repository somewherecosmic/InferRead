import os
from io import BytesIO
import certifi
from motor.motor_asyncio import AsyncIOMotorDatabase
import numpy as np
import pydantic
import PyPDF2
import spacy
import tensorflow as tf
from bson import ObjectId
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from spacy.tokens import Doc, Token
from transformers import CamembertTokenizer, TFCamembertForMaskedLM
from dotenv import load_dotenv

from utility import french_tokenizer, data_models
from routers import french_endpoints
from utility import database


load_dotenv()
pydantic.json.ENCODERS_BY_TYPE[ObjectId] = str

app = FastAPI()

app.include_router(french_endpoints.router)

model = TFCamembertForMaskedLM.from_pretrained('camembert-base')
tokenizer = CamembertTokenizer.from_pretrained('camembert-base')
frenchNLP = spacy.load("fr_core_news_md")

origins = [
    "http://localhost:4200",
    "http://localhost:4200/upload",
    "http://localhost:4200/read"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.options("/{any:path}")
async def options(any: str):
    return {"status": "OK"}


def visitor_body(text, cm, tm, fontDict, fontSize):
    y = tm[5]
    if y > 100 and y < 720:
        return text





# GETTING PAGES, UPDATING PAGE INDEX, PROCESSING TEXT IN SPACY

@app.get("/getCurrentPage/{userId}/{docId}")
async def getCurrentPage(userId: str, docId: str, db: AsyncIOMotorDatabase = Depends(database.get_db)):
    
    pageIndex = await db.get_collection("users").aggregate([
        {
            '$match': {"_id": ObjectId(userId)}
        },
        {
            '$project': {
                'matching_document': {
                    '$filter': {
                        'input': "$documents",
                        'as': "document",
                        'cond': {'$eq': ["$$document._id", ObjectId(docId)]}
                    }
                }
            }
        },
        {
            '$project': {
                'page': {'$arrayElemAt': [{'$first': "$matching_document.pages"}, {'$first': '$matching_document.pageIndex'}]},
                'pageIndex': {'$first': '$matching_document.pageIndex'}
            }
        }
    ]).next()
    return pageIndex


@app.get("/getNextPage/{userId}/{docId}/{pageIndex}")
async def getNextPage(userId: str, docId: str, pageIndex: int, db: AsyncIOMotorDatabase = Depends(database.get_db)):
    nextPage = await db.get_collection("users").aggregate([
        {
            '$match': {"_id": ObjectId(userId)}
        },
        {
            '$project': {
                'matching_document': {
                    '$filter': {
                        'input': "$documents",
                        'as': "document",
                        'cond': {'$eq': ["$$document._id", ObjectId(docId)]}
                    }
                }
            }
        },
        {
            '$project': {
                'page': {'$arrayElemAt': [{'$first': "$matching_document.pages"}, pageIndex+1]}
            }
        }
    ]).next()
    return nextPage


@app.get("/getPreviousPage/{userId}/{docId}/{pageIndex}")
async def getPreviousPage(userId: str, docId: str, pageIndex: int, db: AsyncIOMotorDatabase = Depends(database.get_db)):
    previousPage = await db.get_collection("users").aggregate([
        {
            '$match': {"_id": ObjectId(userId)}
        },
        {
            '$project': {
                'matching_document': {
                    '$filter': {
                        'input': "$documents",
                        'as': "document",
                        'cond': {'$eq': ["$$document._id", ObjectId(docId)]}
                    }
                }
            }
        },
        {
            '$project': {
                'page': {'$arrayElemAt': [{'$first': "$matching_document.pages"}, pageIndex-1]}
            }
        }
    ]).next()
    return previousPage

  # test request method on clientside, comment out DB logic and check if pageIndex sends correctly first


@app.patch("/updatePageIndex/{userId}/{docId}")
async def updatePageIndex(userId: str, docId: str, pageIndexBody: data_models.PageIndexBody, db: AsyncIOMotorDatabase = Depends(database.get_db)):
    pageIndex = pageIndexBody.pageIndex

    filter = {"_id": ObjectId(userId)}
    update = {'$set': {'documents.$[elem].pageIndex': pageIndex}}
    array_filters = [{'elem._id': ObjectId(docId)}]

    result = await db.get_collection("users").update_one(filter, update, array_filters=array_filters)
    if result.raw_result['updatedExisting']:
        return "Successfully updated pageIndex"
    else:
        return "Failed to update pageIndex"


@app.post("/processWordFrench")
async def processWord(wordHelpRequest: data_models.WordHelpRequest):
    doc = frenchNLP(wordHelpRequest.context.replace("-", " "))
    wordToToken = frenchNLP(wordHelpRequest.word)
    # Check if tokenized representation is more than one token
    # Remove leading contractions to get root word
    if (len(wordToToken) > 1):
        wordToToken = wordToToken[-1]
    for token in doc:
        if token.text == wordToToken.text:
            partOfSpeech = token.tag_
            morphology = token.morph.to_dict()
            root = token.lemma_
            isCommon = token.is_stop
            break

    maskedLMPredictions = generatePredictions(wordHelpRequest.maskedContext)
    print(maskedLMPredictions)
    return {"partOfSpeech": partOfSpeech, "root": root, "isCommon": isCommon, "morphology": morphology, "maskedLMPredictions": maskedLMPredictions}


# Difficulty in that context sentence could contain more than one instance of the given word, so masking properly is tricky
# iterate through context sentence, find word, replace with mask, predict
# Need to account for the model predicting the word itself
# Embed word as vector, both with lower and uppercase start
# predicted indexes where != word
def generatePredictions(maskedContext):
    input_ids = tokenizer.encode(maskedContext, add_special_tokens=True)
    mask_token_index = input_ids.index(tokenizer.mask_token_id)

    input_ids = tf.constant([input_ids])
    outputs = model(input_ids)

    predictions = outputs[0]

    num_top_predictions = 5
    predicted_indexes = tf.math.top_k(
        predictions[0, mask_token_index], k=num_top_predictions).indices.numpy()
    predicted_words = [tokenizer.decode(
        [predicted_index]) for predicted_index in predicted_indexes]

    return predicted_words

    # word = "vivement"
    # input_ids = tf.cast(tokenizer.encode(word, add_special_tokens=False, return_tensors='tf'), dtype=tf.int32)

    # with tf.device('/cpu:0'):
    #     embedding = model(input_ids)[0][0][0]

    # vocab = tokenizer.get_vocab()
    # similar = []

    # for other_word in vocab:
    #     other_input_ids = tf.cast(tokenizer.encode(other_word, add_special_tokens=False, return_tensors='tf'), dtype=tf.int32)
    #     with tf.device('/cpu:0'):
    #         other_embedding = model(other_input_ids)[0][0][0]
    #     similarity = cosine_similarity(embedding, other_embedding, axis=0)
    #     if similarity > 0.5 and other_word != word:
    #         similar.append(other_word)

    # Deprecated method of synonym finding -> spaCy word vectors
    # similar = nlp.vocab.vectors.most_similar(
    #     np.asarray([nlp.vocab.vectors[nlp.vocab.strings[wordHelpRequest.word]]]), n=10
    # )
    # words = [nlp.vocab.strings[w] for w in similar[0][0]]
    # distances = similar[2]

    # print(words)

# generatePredictions()
