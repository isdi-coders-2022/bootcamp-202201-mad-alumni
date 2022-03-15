import express from 'express';
import {
    login,
    handleGet,
    loginControl,
} from '../controllers/login.controller.js';

const router = express.Router();

router.post('/', loginControl, login);

router.get('/', handleGet);

export default router;
