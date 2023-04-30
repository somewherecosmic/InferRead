from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dataclasses import dataclass
from typing import List
from transformers import TFCamembertForMaskedLM, CamembertTokenizer
import PyPDF2
from io import BytesIO
import os
import motor.motor_asyncio
import certifi
import pydantic
from bson import ObjectId
import spacy
from spacy.tokenizer import Tokenizer
from spacy.tokens import Doc, Token
import numpy as np
import tensorflow as tf
from tensorflow.keras.losses import cosine_similarity

# TODO on fetching, perform spaCy operations on page, cache pages & progress with Redis?

pydantic.json.ENCODERS_BY_TYPE[ObjectId] = str

app = FastAPI()
model = TFCamembertForMaskedLM.from_pretrained('camembert-base')
tokenizer = CamembertTokenizer.from_pretrained('camembert-base')
frenchNLP = spacy.load("fr_core_news_lg")

# export to file later

class frenchTokenizer(Tokenizer): 
    def __init__(self, nlp):
        super().__init__(nlp.vocab)
        
    
    def split(self, doc):
        tokens = super().split(doc)
        i = 0
        while i < len(tokens):
            if tokens[i].text == '-':
                tokens[i-1:i+2] = [Doc(doc.vocab, [Token(doc, i-1, text=tokens[i-1].text)]),
                                   Doc(doc.vocab, [Token(doc, i, text=tokens[i+1].text)])]
                i -= 1
            i += 1
        return tokens





ca = certifi.where()
client = motor.motor_asyncio.AsyncIOMotorClient(
    os.environ["MONGODB_URL"], tlsCAFile=ca)
database = client.test
user_collection = database.get_collection("users")

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


class UploadRequest(BaseModel):
    document: UploadFile
    id: str = Form(...)

# Model needs to be JSON encoded before being sent to Atlas


@dataclass
class Document:
    _id: ObjectId
    title: str
    pages: List[str]
    language: str
    pageIndex: int


class WordHelpRequest(BaseModel):
    word: str
    context: str
    maskedContext: str
    userId: str

    # def __init__(self, title, pages, language):
    #     self.title = title
    #     self.pages = pages
    #     self.language = language


@app.get("/")
async def root():

    return {"message": "Hello World"}


@app.get("/test")
async def test():
    return {"message": "DB tested, dummy inserted"}

# Create post endpoint that takes a file and returns a chapter?
# Needs to take a file as arg
# Pass file to python script
# Run script, return result of script


@app.post("/preprocess")
async def preprocess(user: str = Form(...), document: UploadFile = File(...), language: str = Form(...)): # document: Annotated[UploadFile, File()], id: Annotated[str, Form()]
    stream = BytesIO(document.file.read())
    pdf = PyPDF2.PdfReader(stream)
    currentPage = 0
    text = ""
    pages = []
    while (currentPage < len(pdf.pages)):
        text = pdf.pages[currentPage].extract_text().replace(
            "\n\n", " ").replace("\n", "")
        pages.append(text)
        currentPage += 1
    # Have array representing the literal pages of the document
    # Can call array.join() on the elements to return the full text
    # Slice off first 4 or so pages as a metric for removing intro text
    # Now, need to send to backend, as well as find some way to
    # iterate through / turn pages on the user end
    # preprocessed_document = {"title": document.filename, "pages": pages, "language": "French"}
    preprocessed_document = Document(_id=ObjectId(), title=document.filename.split(
        ".")[0], pages=pages, language=language, pageIndex=0)

    WriteStatus = await addDocumentData(preprocessed_document, user)
    return {"successfulUpload": WriteStatus}  # newDocId

# This endpoint preprocesses the text into raw plaintext, need to sentencize?

# refactor, update user model and embed the document into their documents array


async def addDocument(document_data, user: str):
    document = await user_collection.update_one({"_id": ObjectId(user)}, {"$push": {"documents": document_data.__dict__}}, upsert=True)
    print(document_data.__dict__)
    # doc_added = await document_collection.find_one({"title": document_data.title})
    # return doc_added
    return document.acknowledged


async def addDocumentData(document: Document, user: str):
    # document = jsonable_encoder(dict(document)
    writeStatus = await addDocument(document, user)
    return writeStatus


# GETTING PAGES, UPDATING PAGE INDEX, PROCESSING TEXT IN SPACY


# @app.get("/getPageIndex/{userId}/{docId}/")
# async def getPageIndex(userId: str, docId: str):
#     pageIndex = await user_collection.find_one({"_id": ObjectId(userId)}, {"documents" : { "$elemMatch": {"_id": ObjectId(docId)}}})
#     return pageIndex

@app.get("/getCurrentPage/{userId}/{docId}")
async def getCurrentPage(userId: str, docId: str):

    pageIndex = await user_collection.aggregate([
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
async def getNextPage(userId: str, docId: str, pageIndex: int):
    nextPage = await user_collection.aggregate([
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
async def getPreviousPage(userId: str, docId: str, pageIndex: int):
    previousPage = await user_collection.aggregate([
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


@app.post("/processWord")
async def processWord(wordHelpRequest: WordHelpRequest):
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
    predicted_indexes = tf.math.top_k(predictions[0, mask_token_index], k=num_top_predictions).indices.numpy()
    predicted_words = [tokenizer.decode([predicted_index]) for predicted_index in predicted_indexes]

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

@app.get("/predictWord/{language}/{sentence}/{maskedWord}")
async def predictWord(language: str, sentence: str, maskedWord: str):
    if (language == "French"):
        return "This is Irish :)"
    else:
        return "not Irish Yo"