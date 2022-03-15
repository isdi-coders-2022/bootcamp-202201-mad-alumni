import express from 'express';
import { getAllItems } from '../controllers/items.controller.js';
const router = express.Router();

router.get('/list', getAllItems);

export default router;
