import torch
from fastapi import APIRouter
from pydantic import BaseModel
from transformers import AutoModelWithLMHead, AutoTokenizer

router = APIRouter()

tokenizer = AutoTokenizer.from_pretrained(
    './bert-base-irish-cased-v1', local_files_only=True)
model = AutoModelWithLMHead.from_pretrained(
    './bert-base-irish-cased-v1', local_files_only=True)


class WordHelpRequest(BaseModel):
    word: str
    context: str
    userId: str


@router.post("/processWordIrish")
async def processWordIrish(wordHelpRequest: WordHelpRequest):
    return maskWordInSentence(wordHelpRequest.word, wordHelpRequest.context)


def maskWordInSentence(word: str, sentence: str):
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
