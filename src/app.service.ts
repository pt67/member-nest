import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';

@Injectable()
export class AppService {
constructor(private readonly userService: UserService) {}

  async create(user: User): Promise<User> {
    return this.userService.create(user);
  }

  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
