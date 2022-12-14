import express from 'express';
import { registerUserHandler } from '../controllers/auth.controller';
import { validate } from '../middleware/validate';
import { createUserSchema } from '../schemas/user.schema';

const router = express.Router();

// Register user
router.post('/register', validate(createUserSchema), registerUserHandler);

export default router;
