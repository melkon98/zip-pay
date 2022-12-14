import { object, string, number, TypeOf } from 'zod';

export const createAccountSchema = object({
  body: object({
    title: string({
      required_error: 'Title is required'
    }),
    balance: number({
      required_error: 'Content is required'
    })
      .min(0, 'Balance must be more than 0'),
  })
});

const params = {
  params: object({
    accountId: string()
  })
};

export const getAccountSchema = object({
  ...params
});

export type CreateAccountInput = TypeOf<typeof createAccountSchema>['body'];
