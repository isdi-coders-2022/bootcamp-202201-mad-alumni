import express from 'express';
const router = express.Router();

import { login } from '../controllers/login.controller.js';
import { insertUser } from '../controllers/register.controller.js';

router.post('/login', login);
router.post('/register', insertUser);

export default router;
