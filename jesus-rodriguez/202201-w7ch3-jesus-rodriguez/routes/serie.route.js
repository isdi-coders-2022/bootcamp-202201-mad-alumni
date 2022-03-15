import express from 'express';
const router = express.Router();

import { insertSerie, getSeries } from '../controllers/serie.controller.js';

router.post('/', insertSerie);
router.get('/', getSeries);

export default router;
