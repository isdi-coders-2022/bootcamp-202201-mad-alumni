import { login } from '../controllers/login.controllers.js';
import express from 'express';
const router = express.Router();

router.post('/', login);

export default router;
