import { getPlaforms } from '../controllers/platform.controller.js';
import express from 'express';
const router = express.Router();

router.get('/', getPlaforms);

export default router;
