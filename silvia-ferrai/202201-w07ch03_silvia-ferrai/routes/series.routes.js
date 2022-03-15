import express from 'express';

const router = express.Router();

router.post('/platforms', createPlatform);
router.get('/platform', getPlataform);

export default router;
