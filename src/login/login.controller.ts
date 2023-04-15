import { Controller, Get, Post, Body } from '@nestjs/common';
import { User } from '../schemas/user.schema';
import { UserService } from '../user.service';
import { Request } from 'express';

@Controller('login')
export class LoginController {
constructor(
private readonly userService: UserService
) {}

@Get()
  findAll(): string {
    return "Hello from Login";
  }
  
@Post()
   async logIn(@Body() signInDto: Record<string, any>){
     return this.userService.signIn(signInDto.username, signInDto.password)
   }

}
