import { Controller, Get, Post, Body } from '@nestjs/common';
import { User } from '../schemas/user.schema';
import { UserService } from '../user.service';

@Controller('login')
export class LoginController {
constructor(private readonly userService: UserService) {}

@Get()
  findAll(): string {
    return "Hello from Login";
  }
  
@Post()
   async logIn(@Body() user: User): Promise<User>{
     return this.userService.signIn(user.username, user.password);
   
   }

}
