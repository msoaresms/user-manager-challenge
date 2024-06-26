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
    await this.userRepository.update(id, updateUserDto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }

  async countUsersGeneral() {
    const activeUsers = await this.userRepository.countBy({ isActive: true });
    const inactiveUsers = await this.userRepository.countBy({
      isActive: false,
    });
    return { activeUsers, inactiveUsers, total: activeUsers + inactiveUsers };
  }

  async countUsersAdmin() {
    const activeAdminUsers = await this.userRepository.countBy({
      isActive: true,
      isAdmin: true,
    });
    const inactiveAdminUsers = await this.userRepository.countBy({
      isActive: false,
      isAdmin: true,
    });
    return {
      activeAdminUsers,
      inactiveAdminUsers,
      total: activeAdminUsers + inactiveAdminUsers,
    };
  }

  async countUsers() {
    const activeUsers = await this.userRepository.countBy({
      isActive: true,
      isAdmin: false,
    });
    const inactiveUsers = await this.userRepository.countBy({
      isActive: false,
      isAdmin: false,
    });
    return {
      activeUsers,
      inactiveUsers,
      total: activeUsers + inactiveUsers,
    };
  }

  async countUsersByRole() {
    const activeUsers = await this.userRepository.countBy({
      isActive: true,
      isAdmin: false,
    });
    const inactiveUsers = await this.userRepository.countBy({
      isActive: false,
      isAdmin: false,
    });
    const activeAdmins = await this.userRepository.countBy({
      isActive: true,
      isAdmin: true,
    });
    const inactiveAdmins = await this.userRepository.countBy({
      isActive: false,
      isAdmin: true,
    });
    return {
      activeUsers,
      inactiveUsers,
      activeAdmins,
      inactiveAdmins,
      totalUsers: activeUsers + inactiveUsers,
      totalAdmin: activeAdmins + inactiveAdmins,
      total: activeUsers + inactiveUsers + activeAdmins + inactiveAdmins,
    };
  }

  hashPassword(password: string) {
    return bcrypt.hash(password, saltOrRounds);
  }

  async login(loginDto: LoginDto) {
    const user = await this.findOneByEmail(loginDto.email);
    if (!user) throw new UnauthorizedException();

    const validPassword = bcrypt.compareSync(loginDto.password, user.password);
    if (!validPassword) throw new UnauthorizedException();
    return {
      access_token: this.jwtService.sign({ ...user }),
      name: user.name,
      lastname: user.lastname,
      email: user.email,
    };
  }

  checkIfFoundUser(user: User) {
    if (user) {
      return user;
    } else {
      throw new NotFoundException('User not found');
    }
  }
}
