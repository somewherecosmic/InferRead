from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Union

app = FastAPI()

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

@app.get("/")
async def root():
    return {"message": "Hello World"}


# Create post endpoint that takes a file and returns a chapter?
# Needs to take a file as arg
# Pass file to python script
# Run script, return result of script
@app.post("/preprocess")
def preprocess(document: UploadFile):
    return {"file object": document}