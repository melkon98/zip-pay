import { NextFunction, Request, Response } from 'express';

import {
  createUser,
} from '../services/user.service';

export const registerUserHandler = async (
  req: Request<{}, {}>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password, monthly_salary, monthly_expenses } = req.body;

    if (monthly_salary < 1000)
      return res.status(201).json({
        status: 'success',
        message: 'Monthly salary must be more than $1000'
      });

    if (monthly_expenses < 1000)
      return res.status(201).json({
        status: 'success',
        message: 'Monthly expenses must be more than $1000'
      });

    const newUser = await createUser({
      name,
      email: email.toLowerCase(),
      password,
      monthly_salary,
      monthly_expenses
    });

    res.status(201).json({
      status: 'success',
      message:
        `User with email ${ newUser.email } created successfully`
    });
  } catch (err: any) {
    if (err.code === '23505') {
      return res.status(409).json({
        status: 'fail',
        message: 'User with that email already exist'
      });
    }
    next(err);
  }
};
