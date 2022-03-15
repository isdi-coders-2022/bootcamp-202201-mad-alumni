import express from 'express';
import * as controllers from '../controllers/robots.controller.js';

export const robotsRouter = express.Router();

robotsRouter.get('/', controllers.getAllRobots);

robotsRouter.get('/:id', controllers.getRobot);

robotsRouter.post('/', controllers.addRobot);

robotsRouter.patch('/:id', controllers.updateRobot);

robotsRouter.delete('/:id', controllers.deleteRobot);
