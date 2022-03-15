import express from 'express';
import { loginUser } from '../controllers/users/login.controller.js';
import { registerUser } from '../controllers/users/register.controller.js';
import { getAllUsers } from '../controllers/users/getAllUsers.controller.js';

import { updateUser } from '../controllers/users/updateUser.controller.js';
import { loginAuthentication } from '../middlewares/interceptors.js';
import {
    getEnemies,
    getFriends,
} from '../controllers/users/getUser.controller.js';
const router = express.Router();

router
    .post('/register', registerUser)
    .post('/login', loginUser)
    .get('/', loginAuthentication, getAllUsers)
    .get('/:id', loginAuthentication, getFriends)
    .get('/:id', loginAuthentication, getEnemies)
    .patch('/:id', loginAuthentication, updateUser);

export default router;
