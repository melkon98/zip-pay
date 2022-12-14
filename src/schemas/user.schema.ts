import { number, object, string, TypeOf, z } from 'zod';
import { RoleEnumType } from '../entities/user.entity';

export const createUserSchema = object({
  body: object({
    name: string({
      required_error: 'Name is required'
    }),

    email: string({
      required_error: 'Email address is required'
    }).email('Invalid email address'),

    password: string({
      required_error: 'Password is required'
    })
      .min(8, 'Password must be more than 8 characters')
      .max(32, 'Password must be less than 32 characters'),

    monthly_salary: number({
      required_error: 'Password is required'
    })
      .min(1000, 'Monthly salary must be more than $1000'),

    monthly_expenses: number({
      required_error: 'Password is required'
    })
      .min(1000, 'Monthly salary must be more than $1000'),

    role: z.optional(z.nativeEnum(RoleEnumType))
  })
});
