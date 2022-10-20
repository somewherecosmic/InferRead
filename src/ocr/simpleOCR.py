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
    pdfTarget = "fileTarget"
    pdfFileObj = open(pdfTarget, 'rb')
    pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
    currPage = 0
    num_pages = pdfReader.numPages
    text = ""

    while currPage < num_pages:
        pageObj = pdfReader.getPage(currPage)
        currPage += 1
        text += pageObj.extractText()

    if text != "":
        print("Non-image based PDF")

    else:
        text = Image.open(pdfTarget)
        ocr_result = pytesseract.image_to_string(text)
        text = ocr_result
    
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


# simple spacy tokenisation flow for French
nlp = spacy.load("fr_dep_news_trf")
doc = nlp(text)
print(doc)

