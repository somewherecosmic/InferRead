// Define endpoints for user document operations
// Typical CRUD operations for documents

import express from 'express';
import { getSettings, updateSettings, getBank, updateBank } from '../controllers/user-settings.js';

const router = express.Router();

router.get("/getSettings/:id", getSettings);
router.patch("/updateSettings/:id", updateSettings);
router.get("/getBank/:id", getBank);
router.patch("/updateBank/:id", updateBank);

export default router;