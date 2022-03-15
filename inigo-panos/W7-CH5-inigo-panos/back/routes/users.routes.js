import express from 'express';
import {
    userLogin,
    userRegister,
    getAllUsers,
} from '../controllers/users.controller.js';

const router = express.Router();

router.post('/login', userLogin);
router.post('/register', userRegister);
router.get('/', getAllUsers);
export default router;
