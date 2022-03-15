import {
    getAllRobotsController,
    getRobotController,
    insertRobotController,
    updateRobotController,
    deleteRobotController,
} from '../controllers/robots.controller.js';
import express from 'express';

const router = express.Router();

router.get('/', getAllRobotsController);
router.get('/:id', getRobotController);
router.post('/', insertRobotController);
router.patch('/:id', updateRobotController);
router.delete('/:id', deleteRobotController);

export default router;
