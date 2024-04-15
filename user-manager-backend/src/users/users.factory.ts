import { setSeederFactory } from 'typeorm-extension';
import { User } from './entities/user.entity';
import { Faker } from '@faker-js/faker';

export const UsersFactory = setSeederFactory(User, (faker: Faker) => {
  const user = new User();
  user.name = faker.person.firstName();
  user.lastname = faker.person.lastName();
  user.email = faker.internet.email();
  user.password = faker.internet.password();
  user.isActive = faker.datatype.boolean();
  user.isAdmin = faker.datatype.boolean();
  return user;
});
