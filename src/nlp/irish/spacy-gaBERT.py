import spacy
import transformers

# Load the tokenizer and model for gaois-bert-base
tokenizer = transformers.AutoTokenizer.from_pretrained(
    "bert-base-irish-cased-v1")
model = transformers.AutoModel.from_pretrained("bert-base-irish-cased-v1")

bert_transformer = transformers.pipeline(
    "feature-extraction", model=model, tokenizer=tokenizer)

# Define a custom spaCy component that uses the transformers pipeline


@spacy.Language.component("gaBERT_feature_extractor")
class BertFeatureExtractor:
    def __init__(self, transformer):
        self.transformer = transformer

    def __call__(self, doc):
        tokens = [token.text for token in doc]
        features = self.transformer(tokens)
        doc.vector = features.mean(axis=0)
        return doc


# Load the Irish language model and add the BERT pipeline
nlp = spacy.blank("ga")
bert_extractor = BertFeatureExtractor(bert_transformer)
nlp.add_pipe("gaBERT_feature_extractor")
# Process some Irish text
doc = nlp("Gaillimheach a bhfuil an saol feicthe aige.")
for token in doc:
    print(token.text, token.vector[:7])
