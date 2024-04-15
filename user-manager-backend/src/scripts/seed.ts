import { User } from '../users/entities/user.entity';
import UsersSeeder from '../users/user.seeder';
import { UsersFactory } from '../users/users.factory';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions, runSeeders } from 'typeorm-extension';

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: '172.19.0.4',
  port: 5432,
  password: 'ck2GEqoCs7',
  username: 'user-manager',
  database: 'user-manager',
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
