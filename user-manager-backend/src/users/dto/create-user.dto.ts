import { IsBoolean, IsEmail, Length } from 'class-validator';

export class CreateUserDto {
  @Length(1, 15)
  name: string;

  @Length(1, 15)
  lastname: string;

  @IsEmail()
  email: string;

  @Length(8, 20)
  password: string;

  @IsBoolean()
  isAdmin: boolean;

  @IsBoolean()
  isActive: boolean;
}
