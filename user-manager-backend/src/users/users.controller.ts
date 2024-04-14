import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  BadRequestException,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginDto } from './dto/login.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto).catch((e) => {
      if (/(email)[\s\S]+(already exists)/.test(e.detail)) {
        throw new BadRequestException(
          'Account with this email already exists.',
        );
      }
      return e;
    });
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('status-general')
  countUsersGeneral() {
    return this.usersService.countUsersGeneral();
  }

  @Get('status-admin')
  countUsersAdmin() {
    return this.usersService.countUsersAdmin();
  }

  @Get('status-user')
  countUsers() {
    return this.usersService.countUsers();
  }

  @Get('status-by-role')
  countUsersByRole() {
    return this.usersService.countUsersByRole();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto).catch((e) => {
      if (/(email)[\s\S]+(already exists)/.test(e.detail)) {
        throw new BadRequestException(
          'Account with this email already exists.',
        );
      }
      return e;
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Post('auth')
  login(@Body() loginDto: LoginDto) {
    return this.usersService.login(loginDto);
  }
}
