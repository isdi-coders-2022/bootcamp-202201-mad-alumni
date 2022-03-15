import express from 'express';
const router = express.Router();

import { insertUser, login } from '../controllers/users.controller.js';

router.post('/login', login);
router.post('/register', insertUser);

export default router;
