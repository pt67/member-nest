import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from '../user.service';
import { User } from '../schemas/user.schema';

@Controller('signup')
export class SignupController {
constructor(private readonly userService: UserService) {}

@Post()
  async create(@Body() createUserDto: User): Promise<User>{
     return this.userService.create(createUserDto);
  }


@Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }


}
