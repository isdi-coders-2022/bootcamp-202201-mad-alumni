import express from 'express';
import * as controllers from '../controllers/auth.controller.js';

export const authRouter = express.Router();

authRouter.post('/login', controllers.login);
authRouter.post('/register', controllers.register);
authRouter.get('/token-login', controllers.loginToken);
