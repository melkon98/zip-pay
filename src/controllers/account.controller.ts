import { NextFunction, Request, Response } from 'express';
import {
  CreateAccountInput
} from '../schemas/account.schema';
import { createAccount, findAccounts } from '../services/account.service';
import { findUserById } from '../services/user.service';

export const createAccountHandler = async (
  req: Request<{}, {}, CreateAccountInput>,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await findUserById(res.locals.user.id as string);

    const account = await createAccount(req.body, user!);

    res.status(201).json({
      status: 'success',
      data: {
        account
      }
    });
  } catch (err: any) {
    if (err.code === '23505') {
      return res.status(409).json({
        status: 'fail',
        message: 'Account with that title already exist'
      });
    }
    next(err);
  }
};

export const getAccountsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const accounts = await findAccounts(req);

    res.status(200).json({
      status: 'success',
      results: accounts.length,
      data: {
        accounts
      }
    });
  } catch (err: any) {
    next(err);
  }
};
