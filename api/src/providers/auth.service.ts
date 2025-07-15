import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { TUser } from '../types/TUser';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async register(user: TUser): Promise<boolean> {
    if (!user) {
      throw new UnauthorizedException();
    }

    const userExists = await this.userService.findOne(user.email);
    if (userExists) {
      throw new UnauthorizedException();
    }

    const { password } = user;
    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = uuidv4();
    const updatedUser = { ...user, id: userId, password: hashedPassword };
    return await this.userService.create(updatedUser);
  }

  async login(email: string, password: string): Promise<{ token: string }> {
    const user = await this.userService.findOne(email);

    if (!user) {
      throw new UnauthorizedException();
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException();
    }

    const payload = { username: user.username, email: user.email };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}
