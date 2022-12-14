import { NextFunction, Request, Response } from 'express';
import {
  findUsers,
  findUserById
} from '../services/user.service';

export const getMeHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = res.locals.user;

    res.status(200).status(200).json({
      status: 'success',
      data: {
        user
      }
    });
  } catch (err: any) {
    next(err);
  }
};

export const getByIdHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.body;

    const users = await findUserById(userId);

    res.status(200).status(200).json({
      status: 'success',
      data: {
        users
      }
    });
  } catch (err: any) {
    next(err);
  }
};

export const getAllHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await findUsers();

    res.status(200).status(200).json({
      status: 'success',
      data: {
        users
      }
    });
  } catch (err: any) {
    next(err);
  }
};
