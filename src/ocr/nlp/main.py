from fastapi import FastAPI, File, UploadFile
from fastapi.encoders import jsonable_encoder
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Union, List
import simpleOCR
import PyPDF2
from io import BytesIO
import os
import motor.motor_asyncio
import certifi

app = FastAPI()
ca = certifi.where()
client = motor.motor_asyncio.AsyncIOMotorClient(os.environ["MONGODB_URL"], tlsCAFile=ca)
database = client.test
document_collection = database.get_collection("documents")

origins = [
    "http://localhost:4200",
    "http://localhost:4200/upload"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"]
)

# Model needs to be JSON encoded before being sent to Atlas
class Document(BaseModel):
    title: str = Field(...)
    pages: List[str]
    language: str


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
async def preprocess(document: UploadFile):
    stream = BytesIO(document.file.read())
    pdf = PyPDF2.PdfFileReader(stream)
    currentPage = 0
    text = ""
    pages = []
    while (currentPage < len(pdf.pages)):
        text = pdf.pages[currentPage].extract_text().replace("\n\n", " ").replace("\n", "")
        pages.append(text)
        currentPage += 1
    # Have array representing the literal pages of the document
    # Can call array.join() on the elements to return the full text
    # Slice off first 4 or so pages as a metric for removing intro text
    # Now, need to send to backend, as well as find some way to
    # iterate through / turn pages on the user end
    #preprocessed_document = {"title": document.filename, "pages": pages, "language": "French"}
    preprocessed_document = Document(document.filename, pages, "French");
    print(preprocessed_document)
    #preprocessed_document = await addDocumentData(preprocessed_document)
    return {"document": preprocessed_document}

# This endpoint preprocesses the text into raw plaintext, need to sentencize?

async def addDocument(document_data):
    document = await document_collection.insert_one(document_data)
    print(document_data)
    #doc_added = await document_collection.find_one({"title": document_data.title})
    #return doc_added
    return document

async def addDocumentData(document: Document):
    document = jsonable_encoder(document)
    new_document = await addDocument(document)
    return new_document