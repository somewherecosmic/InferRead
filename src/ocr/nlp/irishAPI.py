import torch
from fastapi import APIRouter
from pydantic import BaseModel
from transformers import AutoModelForMaskedLM, AutoTokenizer
import spacy

router = APIRouter()

tokenizer = AutoTokenizer.from_pretrained(
    './bert-base-irish-cased-v1', local_files_only=True)
model = AutoModelForMaskedLM.from_pretrained(
    './bert-base-irish-cased-v1', local_files_only=True)
irishNLP = spacy.load("xx_ent_wiki_sm")

class WordHelpRequest(BaseModel):
    word: str
    context: str
    userId: str


@router.post("/processWordIrish")
async def processWordIrish(wordHelpRequest: WordHelpRequest):
    doc = irishNLP(wordHelpRequest.context.replace("-", " "))
    wordToToken = irishNLP(wordHelpRequest.word)
    if (len(wordToToken) > 1):
        wordToToken = wordToToken[-1]
    for token in doc:
        if token.text == wordToToken.text:
            partOfSpeech = token.tag_
            morphology = token.morph.to_dict()
            root = token.lemma_
            isCommon = token.is_stop
            break
    
    return {"partOfSpeech": partOfSpeech, "root": root, "isCommon": isCommon, "morphology": morphology, "maskedLMPredictions": generateIrishPredictions(wordHelpRequest.word, wordHelpRequest.context)}


def generateIrishPredictions(word: str, sentence: str):
    sequence = sentence.replace(word, f"{tokenizer.mask_token}")
    input = tokenizer.encode(sequence, return_tensors="pt")
    mask_token_index = torch.where(input == tokenizer.mask_token_id)[1]

    token_logits = model(input)[0]
    mask_token_logits = token_logits[0, mask_token_index, :]

    top5Tokens = torch.topk(mask_token_logits, 5, dim=1).indices[0].tolist()
    decodedTop5Tokens = []
    for token in top5Tokens:
        decodedTop5Tokens.append(tokenizer.decode([token]))
    return decodedTop5Tokens
