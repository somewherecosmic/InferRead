from spacy.tokenizer import Tokenizer

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