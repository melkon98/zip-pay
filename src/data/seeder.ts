import { faker } from '@faker-js/faker';
import { Account } from '../entities/account.entity';
import { User } from '../entities/user.entity';
import { AppDataSource } from '../utils/data-source';

const accountRepository = AppDataSource.getRepository(Account);
const userRepository = AppDataSource.getRepository(User);

AppDataSource.initialize()
  .then(async () => {
    const user = await userRepository.findOne({
      where: { id: '3acc4249-c7c7-4ce0-b87c-01564dd9ba4e' }
    });
    console.log('Connected to database...');
    await (async function () {
      try {
        for (let i = 0; i < 50; i++) {
          const accountInput: Partial<Account> = {
            title: faker.lorem.words(4),
            balance: 0,
            user: user!,
          };

          await accountRepository.save(accountRepository.create(accountInput));
          console.log(`Added ${ accountInput.title } to database`);
        }
      } catch (error) {
        console.log(error);
        process.exit(1);
      }
    })();
  })
  .catch((error: any) => console.log(error));
