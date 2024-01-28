from pydantic import BaseModel
from dataclasses import dataclass
from bson import ObjectId
from fastapi import Form, UploadFile, Depends
from typing import List
from .database import get_db
from motor.motor_asyncio import AsyncIOMotorDatabase

##

# This file is for each data model used in the API, as well as any DB operations using the models


##

class UploadRequest(BaseModel):
    document: UploadFile
    id: str = Form(...)

@dataclass
class Document:
    _id: ObjectId
    title: str
    pages: List[str]
    language: str
    pageIndex: int

async def addDocument(document_data, user: str, db: AsyncIOMotorDatabase):
    document = await db.get_collection("users").update_one({"_id": ObjectId(user)}, {"$push": {"documents": document_data.__dict__}}, upsert=True)
    print(document_data.__dict__)
    return document.acknowledged, document.upserted_id

async def addDocumentData(document: Document, user: str, db: AsyncIOMotorDatabase):
    writeStatus = await addDocument(document, user, db)
    return writeStatus

class WordHelpRequest(BaseModel):
    word: str
    context: str
    maskedContext: str
    userId: str

class PageIndexBody(BaseModel):
    pageIndex: int
