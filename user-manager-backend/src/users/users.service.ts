import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

const saltOrRounds = 10;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await this.hashPassword(createUserDto.password);
    const newUser = await this.userRepository.save(createUserDto);
    return this.findOne(newUser.id);
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOneBy({ id });
    return this.checkIfFoundUser(user);
  }

  async findOneByEmail(email: string) {
    const user = await this.userRepository.findOneBy({ email });
    return this.checkIfFoundUser(user);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const data = {
      name: updateUserDto.name,
      lastname: updateUserDto.lastname,
      email: updateUserDto.email,
      role: updateUserDto.role,
    };
    await this.userRepository.update(id, data);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }

  hashPassword(password: string) {
    return bcrypt.hash(password, saltOrRounds);
  }

  async login(loginDto: LoginDto) {
    const user = await this.findOneByEmail(loginDto.email);
    if (!user) throw new UnauthorizedException();

    const validPassword = bcrypt.compareSync(loginDto.password, user.password);
    if (!validPassword) throw new UnauthorizedException();
    return { access_token: this.jwtService.sign({ ...user }) };
  }

  checkIfFoundUser(user: User) {
    if (user) {
      return user;
    } else {
      throw new NotFoundException('User not found');
    }
  }
}
