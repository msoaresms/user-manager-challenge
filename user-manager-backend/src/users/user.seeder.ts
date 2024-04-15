import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { User } from './entities/user.entity';

export default class UsersSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const userFactory = factoryManager.get(User);
    const users = await userFactory.saveMany(15);
    const repository = await dataSource.getRepository(User);
    await repository.insert({
      name: 'Admin',
      lastname: 'Manager',
      email: 'admin@admin.com',
      password: '$2b$10$BDDkAR.na3Hv.mHj2KgxmujwCnTuBM887usKsyUDbQVJF.3rexe12', //Password: admin-manager
      isActive: true,
      isAdmin: true,
    });
  }
}
