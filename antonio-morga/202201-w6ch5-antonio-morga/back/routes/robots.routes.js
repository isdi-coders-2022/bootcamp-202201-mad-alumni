import express from 'express';
import {
    getAllRobots,
    getRobot,
    insertRobot,
    updateRobot,
    deleteRobot,
} from '../controllers/robots.controller.js';

const router = express.Router();

router.get('/', getAllRobots);
router.get('/:id', getRobot);
router.post('/', insertRobot);
router.patch('/:id', updateRobot);
router.delete('/:id', deleteRobot);

export default router;
