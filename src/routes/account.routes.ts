import express from 'express';
import {
  createAccountHandler,
  getAccountsHandler,
} from '../controllers/account.controller';
import { validate } from '../middleware/validate';
import {
  createAccountSchema,
} from '../schemas/account.schema';

const router = express.Router();

router
  .route('/')
  .post(validate(createAccountSchema), createAccountHandler)
  .get(getAccountsHandler);

export default router;
