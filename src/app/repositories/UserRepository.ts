import { appDataSource, initializeDatabase } from '@/app/database/initializer';
import { User } from '@/app/models/User';

export class UserResolver {
  userRepo = appDataSource.getRepository(User);
}

/*
  const connection = await initializeDatabase();
  const userRepo = await getRepository(User);
*/


const main = async () => {
  console.time('main');
  await initializeDatabase();
  console.timeEnd('main');
};

main().catch(err => {
  console.error(err);
  process.exit(1);
});