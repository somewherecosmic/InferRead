// Define endpoints for authentication - signup and login routes
// Pass handling off to controllers 

import express from 'express';

import { signup, logIn } from '../controllers/auth.js';

const router = express.Router();

router.post('/signup', signup);

router.post('/login', logIn);

export default router;