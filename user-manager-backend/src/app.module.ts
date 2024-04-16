import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { configuration } from 'src/config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.cwd()}/src/config/env/${process.env.NODE_ENV}.env`,
      load: [configuration],
    }),
    UsersModule,
    TypeOrmModule.forRoot({
      //@ts-ignore
      type: process.env.DATABASE_TYPE,
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      password: process.env.DATABASE_PASSWORD,
      username: process.env.DATABASE_USERNAME,
      database: process.env.DATABASE_NAME,
      synchronize: true,
      entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
