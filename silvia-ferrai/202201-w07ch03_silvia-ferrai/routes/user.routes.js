import express from 'express';
import { userLogin } from '../controllers/login.controller.js';
import { userRegister } from '../controllers/register.controller.js';

const router = express.Router();

router.post('/login', userLogin);
router.post('/register', userRegister);

export default router;
