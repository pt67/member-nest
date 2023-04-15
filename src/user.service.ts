import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
 constructor(
 @InjectModel('User') 
 private userModel: Model<User>,
 private jwtService: JwtService
 ) {}

  async create(user: User): Promise<User> {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  
  
  
  async signIn(uname: string, pass: string): Promise<any> {
    const user = await this.userModel.find({username: uname});
    
   // return user;
    if (user[0]?.password !== pass) {
      throw new UnauthorizedException();
    }
    
    const payload = { username: user[0].username, id: user[0]._id };
    return {
      access_token: await this.jwtService.signAsync(payload, { secret: "myprivatekey" }),
    };
    
    
  
 
  }
  
 
}
