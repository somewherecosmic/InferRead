// Define endpoints for user document operations
// Typical CRUD operations for documents

import express from 'express';
import { getDocuments, deleteDocument, updateDocumentTitle } from '../controllers/documents.js';

const router = express.Router();

router.get("/getDocuments/:id", getDocuments);

router.delete("/deleteDocument/:id/:docId", deleteDocument);

router.patch("/updateDocumentTitle/:id/:docId", updateDocumentTitle);

export default router;