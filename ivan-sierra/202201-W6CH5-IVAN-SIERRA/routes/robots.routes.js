import express from 'express';
const router = express.Router();

import {
    getAllRobots,
    getRobot,
    addRobot,
    updateRobot,
    deleteRobot,
} from '../controllers/robots.controller.js';

/* GET users listing. */

router.get('/', getAllRobots);
router.get('/:id', getRobot);
router.post('/', addRobot);
router.patch('/:id', updateRobot);
router.delete('/:id', deleteRobot);

export default router;
