import express from 'express';
import { userLogin } from '../controllers/login.controller.js';
import {
    getAllUsers,
    getUser,
    updateUser,
    userRegister,
} from '../controllers/user.controller.js';
import { loginRequired } from '../middlewares/loginRequired.js';

const router = express.Router();

router.post('/login', userLogin);
router.post('/', userRegister);
router.get('/', getAllUsers);
router.get('/:id', loginRequired, getUser);
router.patch('/:id', loginRequired, updateUser);

export default router;
