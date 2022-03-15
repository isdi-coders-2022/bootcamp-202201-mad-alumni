import express from 'express';
import { insertPlatform } from '../controllers/platform.controller.js';
const router = express.Router();

router.post('/', insertPlatform);

export default router;
