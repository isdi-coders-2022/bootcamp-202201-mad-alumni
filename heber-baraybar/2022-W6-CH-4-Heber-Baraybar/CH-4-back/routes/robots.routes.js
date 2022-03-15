import express from 'express';
const router = express.Router();

import {
    getAllRobots,
    getRobots,
    insertRobots,
    updateRobots,
    deleteRobots,
} from '../controllers/robots.controller.js';

/* GET users listing. */

router.get('/', getAllRobots);
router.get('/:id', getRobots);
router.post('/', insertRobots);
router.patch('/:id', updateRobots);
router.delete('/:id', deleteRobots);

export default router;

// module.exports = router;
