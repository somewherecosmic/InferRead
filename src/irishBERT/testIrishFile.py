# Very basic test file to hit with API from Frontend.
from transformers import AutoModelWithLMHead, AutoTokenizer
import torch

def main():
    tokenizer = AutoTokenizer.from_pretrained('../../bert-base-irish-cased-v1', local_files_only=True)
    model = AutoModelWithLMHead.from_pretrained('../../bert-base-irish-cased-v1', local_files_only=True)

    sequence = f"Gaillimheach a {tokenizer.mask_token} an saol feicthe aige."

    input = tokenizer.encode(sequence, return_tensors="pt")
    mask_token_index = torch.where(input == tokenizer.mask_token_id)[1]

    token_logits = model(input)[0]
    mask_token_logits = token_logits[0, mask_token_index, :]

    top_5_tokens = torch.topk(mask_token_logits, 5, dim=1).indices[0].tolist()
    # for token in top_5_tokens:
#     print(sequence.replace(tokenizer.mask_token, tokenizer.decode([token])))
    return top_5_tokens

if __name__ == '__main__':
    main()
