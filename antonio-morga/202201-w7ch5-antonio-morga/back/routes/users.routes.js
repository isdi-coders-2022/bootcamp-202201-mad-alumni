import express from 'express';
import { userRegister } from '../controllers/register.controller.js';
import { userLogin } from '../controllers/login.controller.js';
import { userUpdate } from '../controllers/update.controller.js';
import { getAllUsers } from '../controllers/get-all-users.controller.js';
import { addToList } from '../controllers/add.controller.js';
import { getUser } from '../controllers/get-user.controller.js';
import { getAllFiltered } from '../controllers/get-all-filtered.controller.js';
import { loggedProtect } from '../middlewares/logged-protect.middleware.js';

const router = express.Router();

router
    .get('/', loggedProtect, getAllUsers)
    .get('/:id', loggedProtect, getUser)
    .get('/relation/:filter', loggedProtect, getAllFiltered)
    .post('/register', userRegister)
    .post('/login', userLogin)
    .patch('/:id', loggedProtect, userUpdate)
    .patch('/add/:id', loggedProtect, addToList);

export default router;
