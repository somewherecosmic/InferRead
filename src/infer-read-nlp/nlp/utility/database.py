from motor.motor_asyncio import AsyncIOMotorClient
from motor.motor_asyncio import AsyncIOMotorDatabase
from fastapi import Depends
from dotenv import load_dotenv
import certifi
import os

load_dotenv()

# Dependency Injection for database connection
# DI or Depends can only be used in FastAPI functions
# In order to use the dependency in your own functions, it has to be passed down the chain of functions at each call from a route

DATABASE_URL = os.getenv('MONGODB_URL')

async def get_database() -> AsyncIOMotorDatabase:
    client = AsyncIOMotorClient(DATABASE_URL)
    database = client.get_database("test")
    return database

async def get_db(db: AsyncIOMotorDatabase = Depends(get_database)) -> AsyncIOMotorDatabase:
    return db