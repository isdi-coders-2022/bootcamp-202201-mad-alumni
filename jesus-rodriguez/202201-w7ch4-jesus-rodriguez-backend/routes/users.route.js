import express from 'express';
const router = express.Router();

import * as controller from '../controllers/users.controller.js';
import { loginRequired } from '../middleware/login-control.js';

router.post('/login', controller.login);
router.post('/register', controller.registerUser);
router.get('/', loginRequired, controller.getAllUsers);
router.patch('/:id', loginRequired, controller.updateUser);
router.get('/:id', controller.getUser);
router.patch('/updateRelation/:id', controller.updateRelationship);
router.delete('/:id', controller.deleteUser);

export default router;
