import { Request } from 'express';
import { Account } from '../entities/account.entity';
import { User } from '../entities/user.entity';
import { AppDataSource } from '../utils/data-source';

const accountRepository = AppDataSource.getRepository(Account);

export const createAccount = async (input: Partial<Account>, user: User) => {
  return await accountRepository.save(accountRepository.create({ ...input, user }));
};

export const getAccount = async (accountId: string) => {
  return await accountRepository.findOneBy({ id: accountId });
};

export const findAccounts = async (req: Request) => {
  const builder = accountRepository.createQueryBuilder('account');

  if (req.query.search) {
    builder.where('account.title LIKE :search OR account.content LIKE :search', {
      search: `%${ req.query.search }%`
    });
  }

  if (req.query.sort) {
    const sortQuery = req.query.sort === '-price' ? 'DESC' : 'ASC';
    builder.orderBy('account.title', sortQuery);
  }

  return await builder.getMany();
};
