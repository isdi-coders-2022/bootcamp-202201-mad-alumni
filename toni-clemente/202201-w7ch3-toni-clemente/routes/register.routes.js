import { insertUser } from '../controllers/register.controllers.js';
import express from 'express';
const router = express.Router();

router.post('/', insertUser);

export default router;
