import express from 'express';
const router = express.Router();

import { insertUser, getAllUsers, getUser, updateUser, deleteUser } from '../controllers/users.controller.js';

/* GET users listing. */

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', insertUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;

// module.exports = router;
