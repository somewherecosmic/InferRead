import re
from fastapi import APIRouter, UploadFile, File, Form, Depends
from utility import data_models
from bson import ObjectId
from io import BytesIO
from motor.motor_asyncio import AsyncIOMotorDatabase
import PyPDF2

from utility import database


router = APIRouter()

# Preprocessing endpoint for pdf files uploaded on the frontend

@router.post("/preprocess")
# document: Annotated[UploadFile, File()], id: Annotated[str, Form()]
async def preprocess(user: str = Form(...), document: UploadFile = File(...), language: str = Form(...), title: str = Form(...), db: AsyncIOMotorDatabase = Depends(database.get_db)):
    print("Received file from user: " + user)
    stream = BytesIO(document.file.read())
    pdf = PyPDF2.PdfReader(stream)
    currentPage = 4
    text = ""
    pages = []
    while (currentPage < len(pdf.pages)):
        # .replace("\n\n", " ").replace("\n", "")
        text = pdf.pages[currentPage].extract_text()
        pages.append(re.sub(r'\d+$', '', text))
        currentPage += 1
    preprocessed_document = data_models.Document(_id=ObjectId(), title=title, pages=pages, language=language, pageIndex=0)

    WriteStatus, docId = await data_models.addDocumentData(preprocessed_document, user, db)
    print(docId)
    if WriteStatus == True:
        return {"successfulUpload": preprocessed_document.__dict__}
    else:
        return {"unsuccessfulUpload": WriteStatus}