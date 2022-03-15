import express from 'express';
const router = express.Router();
import { protectRoute } from '../middleware/protecRoute.js';

import { insertItem, getAllItems } from '../controllers/items.controller.js';

router.get('/list', protectRoute, getAllItems);
router.post('/create', insertItem);

export default router;
