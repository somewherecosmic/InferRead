import PyPDF2
import spacy
import pytesseract
from PIL import Image
import os
import sys

document = sys.argv[1]

#Goal: take the PDF, take in the text and tokenise it with spaCy, outputting the different tokens
# If the PDF is image-based, perform an OCR scan instead with tesseract and do the same spaCy tokenisation operations with that output
# Check file type, if plaintext, no PDF type processing is necessary

# Get all text from first chapter
# Have to figure out how to abstract this process, go about skipping indexes or not parsing them and leaving them in
# Go chapter by chapter for each book when processing? Or perform one large processing batch?

# PDF Logic
def PDFFlow(document):
    pdfTarget = document
    # Need to comment either of these lines out depending on if dealing with bytes or not
    pdfFileObj = open(pdfTarget, 'rb')
    #pdfFileObj = pdfTarget.read()
    pdfReader = PyPDF2.PdfReader(pdfFileObj)
    currPage = 0
    num_pages = pdfReader.numPages
    text = ""

    # Currently gets the first 10 pages, an arbitrary limit for now
    while currPage < 10:
        pageObj = pdfReader.getPage(currPage)
        currPage += 1
        text += pageObj.extractText()

    if text != "":
        print("Non-image based PDF")

    else:
        text = Image.open(pdfTarget)
        ocr_result = pytesseract.image_to_string(text)
        text = ocr_result
    
    text = text.replace("\n\n", " ").replace("\n", " ")
    return text

# Plaintext Logic
def PlaintextFlow(document):
    with open(document, "r") as f:
        text = f.read()
        cleanText = text.replace("\n\n", " ").replace("\n", " ")
        f.close()
    return cleanText

if (os.path.splitext(document)[1] == ".pdf"):
    text = PDFFlow(document)

if (os.path.splitext(document)[1] == ".txt"):
    text = PlaintextFlow(document)

class Page:
    def __init__(self, number, sentences):
        self.number = number
        self.sentences = sentences

        


# simple spacy tokenisation flow for French
def spacy_tokenise(text):
    print("Starting spacy operations")
    nlp = spacy.load("fr_core_news_sm")
    nlp.add_pipe('sentencizer')
    pages = []
    with nlp.select_pipes(disable=["tok2vec", "parser", "ner"]):
        doc = nlp(text)
        sentences = list(doc.sents)
    
    return sentences

# def toPages(sentences):
#     pages = []
#     pagecount = 1
#     i = 0
#     while i < len(sentences):

    
#     return pages