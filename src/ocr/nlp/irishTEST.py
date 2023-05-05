# import torch
# from fastapi import APIRouter
# from pydantic import BaseModel
# from transformers import AutoModelForMaskedLM, AutoTokenizer
# import spacy

# tokenizer = AutoTokenizer.from_pretrained(
#     './bert-base-irish-cased-v1', local_files_only=True)
# model = AutoModelForMaskedLM.from_pretrained(
#     './bert-base-irish-cased-v1', local_files_only=True)
# irishNLP = spacy.load("xx_ent_wiki_sm")


# class WordHelpRequest(BaseModel):
#     word: str
#     context: str
#     userId: str


# def processWordIrish(wordHelpRequest: WordHelpRequest):
#     doc = irishNLP(wordHelpRequest.context.replace("-", " "))
#     wordToToken = irishNLP(wordHelpRequest.word)
#     if (len(wordToToken) > 1):
#         wordToToken = wordToToken[-1]
#     for token in doc:
#         if token.text == wordToToken.text:
#             partOfSpeech = token.tag_
#             morphology = token.morph.to_dict()
#             root = token.lemma_
#             isCommon = token.is_stop
#             break

#     return {"partOfSpeech": partOfSpeech, "root": root, "isCommon": isCommon, "morphology": morphology, "maskedLMPredictions": generateIrishPredictions(wordHelpRequest.word, wordHelpRequest.context)}


# def generateIrishPredictions(word: str, sentence: str):
#     sequence = sentence.replace(word, f"{tokenizer.mask_token}")
#     input = tokenizer.encode(sequence, return_tensors="pt")
#     mask_token_index = torch.where(input == tokenizer.mask_token_id)[1]

#     token_logits = model(input)[0]
#     mask_token_logits = token_logits[0, mask_token_index, :]

#     top5Tokens = torch.topk(mask_token_logits, 5, dim=1).indices[0].tolist()
#     decodedTop5Tokens = []
#     for token in top5Tokens:
#         decodedTop5Tokens.append(tokenizer.decode([token]))
#     return decodedTop5Tokens


# if __name__ == "__main__":
#     wordHelpRequest = WordHelpRequest(
#         word="an", context="Tá an bhean ag siúl ar an mbóthar", userId="test")
#     print(processWordIrish(wordHelpRequest))

from transformers import pipeline
import torch
from transformers import (AutoModelForTokenClassification, AutoTokenizer,
                          BertForTokenClassification, BertTokenizer, pipeline, TokenClassificationPipeline)

tokenizer = BertTokenizer.from_pretrained(
    '../../../../autotrain-test-55532129298', local_files_only=True, max_length=128)
model = BertForTokenClassification.from_pretrained(
    '../../../../autotrain-test-55532129298', local_files_only=True, max_length=128)


class MyTokenClassificationPipeline(TokenClassificationPipeline):
    def preprocess(self, sentence, offset_mapping=None):
        truncation = False
        padding = 'longest'
        model_inputs = self.tokenizer(
            sentence,
            return_tensors=self.framework,
            truncation=truncation,
            padding=padding,
            return_special_tokens_mask=True,
            return_offsets_mapping=self.tokenizer.is_fast,
        )
        if offset_mapping:
            model_inputs["offset_mapping"] = offset_mapping

        model_inputs["sentence"] = sentence
        return model_inputs


# num_labels = ...  # number of PoS labels in your dataset
pos_pipeline = MyTokenClassificationPipeline('token-classification', model=model,
                                             tokenizer=tokenizer)

sampData = [{"text": "Gaillimheach a bhfuil an saol feicthe aige."},
            {"text": "Tá an bhean ag siúl ar an mbóthar"}]
pos_tags = pos_pipeline(
    "Gaillimheach a bhfuil an saol feicthe aige.", aggregation_strategy='simple')

for token in pos_tags:
    print(token['word'], token['entity'])

print(pos_tags, "yolo")
