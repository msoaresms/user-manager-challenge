import { IsEmail, IsEnum, Length } from 'class-validator';
import { UserRole } from '../entities/user.entity';

export class CreateUserDto {
  @Length(1, 15)
  name: string;

  @Length(1, 15)
  lastname: string;

  @IsEmail()
  email: string;

  @Length(8, 20)
  password: string;

  @IsEnum(UserRole)
  role: string;
}
