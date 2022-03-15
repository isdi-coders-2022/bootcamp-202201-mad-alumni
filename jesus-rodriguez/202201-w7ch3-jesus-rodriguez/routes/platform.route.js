import express from 'express';
const router = express.Router();

import { checkAdmin } from '../middleware/checkAdmin.js';
import { loginRequired } from '../middleware/loginRequiered.js';
import {
    deletePlatform,
    getAllPlatform,
    insertPlatform,
    updatePlatform,
} from '../controllers/platforms.controller.js';

router.get('/', getAllPlatform);
router.post('/', loginRequired, checkAdmin, insertPlatform);
router.delete('/:id', loginRequired, checkAdmin, deletePlatform);
router.patch('/:id', loginRequired, checkAdmin, updatePlatform);
export default router;
