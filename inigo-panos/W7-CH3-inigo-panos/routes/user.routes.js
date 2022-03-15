import express from 'express';

const router = express.Router();

import { insertUser } from '../controllers/users.controllers.js';

router.post('/', insertUser);

export default router;
