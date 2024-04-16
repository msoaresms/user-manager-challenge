import { User } from '../users/entities/user.entity';
import UsersSeeder from '../users/user.seeder';
import { UsersFactory } from '../users/users.factory';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions, runSeeders } from 'typeorm-extension';

const options: DataSourceOptions & SeederOptions = {
  //@ts-ignore
  type: process.env.DATABASE_TYPE,
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  password: process.env.DATABASE_PASSWORD,
  username: process.env.DATABASE_USERNAME,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  entities: [User],
  factories: [UsersFactory],
  seeds: [UsersSeeder],
};

const dataSource = new DataSource(options);

dataSource.initialize().then(async () => {
  await dataSource.synchronize(true);
  await runSeeders(dataSource);
  process.exit();
});
