from fastapi import FastAPI, File, UploadFile, Form
from fastapi.encoders import jsonable_encoder
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field, json
from dataclasses import dataclass, asdict
from typing import Union, List, Annotated
import simpleOCR
import PyPDF2
from io import BytesIO
import os
import motor.motor_asyncio
import certifi
import pydantic
from bson import ObjectId

# TODO Need to store user's books in the OVERVIEW tab
# TODO Add user ID to the book for fetching - any book with their ID will appear in their OVERVIEW tab
# TODO Add ability for user to delete a book
# TODO on fetching, perform spaCy operations on page, cache pages & progress with Redis?

pydantic.json.ENCODERS_BY_TYPE[ObjectId]=str

app = FastAPI()
ca = certifi.where()
client = motor.motor_asyncio.AsyncIOMotorClient(os.environ["MONGODB_URL"], tlsCAFile=ca)
database = client.test
document_collection = database.get_collection("documents")
user_collection = database.get_collection("users")

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
async def preprocess(user: str = Form(...), document: UploadFile = File(...)): # document: Annotated[UploadFile, File()], id: Annotated[str, Form()]
    print(document)
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
    preprocessed_document = Document(_id=ObjectId(), title=document.filename, pages=pages, language="French");

    WriteStatus = await addDocumentData(preprocessed_document, user)
    return {"successfulUpload": WriteStatus} #newDocId

# This endpoint preprocesses the text into raw plaintext, need to sentencize?

# refactor, update user model and embed the document into their documents array
async def addDocument(document_data, user: str):
    document = await user_collection.update_one({"_id": ObjectId(user)}, { "$push": {"documents": document_data.__dict__}}, upsert=True)
    #doc_added = await document_collection.find_one({"title": document_data.title})
    #return doc_added
    return document.acknowledged

async def addDocumentData(document: Document, user: str):
    # document = jsonable_encoder(dict(document)
    writeStatus = await addDocument(document, user)
    return writeStatus
