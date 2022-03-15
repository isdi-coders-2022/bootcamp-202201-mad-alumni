import express from 'express';
import * as controllers from '../controllers/user.controller.js';

export const userRouter = express.Router();

userRouter.get('/', controllers.getAllUsers);
userRouter.get('/other-users', controllers.getAllOtherUsers);
userRouter.get('/my-info', controllers.getUserInfo);
userRouter.get('/toggle-friend/:idUser', controllers.toggleFriend);
userRouter.get('/toggle-enemy/:idUser', controllers.toggleEnemy);
userRouter.get('/friends', controllers.getFriends);
userRouter.get('/enemies', controllers.getEnemies);
userRouter.delete('/:idUser', controllers.deleteUser);
userRouter.patch('/my-profile', controllers.updateProfile);
