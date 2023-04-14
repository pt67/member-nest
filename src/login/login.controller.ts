import { Controller, Get, Post } from '@nestjs/common';

@Controller('login')
export class LoginController {

@Get()
  findAll(): string {
    return "Hello from Login";
  }
  
@Post()
   makeCall(): string {
     return "you made a call";
   }

}
