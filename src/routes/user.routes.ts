import express from 'express';
import { getAllHandler, getByIdHandler, getMeHandler } from '../controllers/user.controller';

const router = express.Router();

// Get currently logged in user
router.get('/me', getMeHandler);

router.get('/all', getAllHandler);

router.get('/:userId', getByIdHandler);

export default router;
