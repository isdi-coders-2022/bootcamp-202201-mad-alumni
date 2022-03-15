import express from 'express';
import { userLogin } from '../controllers/login.controller.js';
import { userRegister } from '../controllers/register.controller.js';
import {
    getUser,
    getAllUsers,
    updateUser,
} from '../controllers/user.controller.js';

const router = express.Router();

router.post('/login', userLogin);
router.post('/register', userRegister);
router.get('/', getAllUsers);
router.get('/:id', getUser);
router.patch('/:id', updateUser);
export default router;
