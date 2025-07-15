import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { TUser } from '../types/TUser';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(user: TUser): Promise<boolean> {
    console.log(user);
    return !!(await this.userRepository.save(user));
  }

  findOne(email: string): Promise<User | null> {
    return this.userRepository.findOneBy({
      email: email,
    });
  }
}
