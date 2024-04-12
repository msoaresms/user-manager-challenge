import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

@Injectable()
export class AuthService {
  hashPassword(password: string) {
    return bcrypt.hash(password, saltOrRounds);
  }
}
