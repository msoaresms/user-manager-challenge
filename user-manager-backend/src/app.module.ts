import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      password: 'mysecretpassword',
      username: 'postgres',
      database: 'my_database',
      synchronize: true,
      entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
