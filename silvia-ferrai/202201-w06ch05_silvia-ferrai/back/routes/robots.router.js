import express from 'express';
const router = express.Router();

import {
    getAllRobots,
    getRobot,
    insertRobot,
    updateRobot,
    deleteRobot,
} from '../controllers/robots.controllers.js';

/* GET users listing. */

router.get('/', getAllRobots);
router.get('/:id', getRobot);
router.post('/', insertRobot);
router.patch('/:id', updateRobot);
router.delete('/:id', deleteRobot);

export default router;
