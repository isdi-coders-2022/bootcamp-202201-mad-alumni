import express from 'express';
import {
    deletePlatform,
    getAllPlatform,
    insertPlatform,
} from '../controllers/platform.controller.js';
import { checkAdmin } from '../middlewares/checkAdmin.js';
const router = express.Router();

router.get('/', getAllPlatform);
router.post('/', checkAdmin, insertPlatform);
router.delete('/:id', checkAdmin, deletePlatform);

export default router;
