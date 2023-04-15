import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignupController } from './signup/signup.controller';
import { LoginController } from './login/login.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { UserService } from './user.service';
import { UserModule } from './user/user.module';
import { JwtService } from '@nestjs/jwt';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), MongooseModule.forFeature([{ name: User.name, schema: UserSchema}]), UserModule],
  controllers: [AppController, SignupController, LoginController],
  providers: [AppService, UserService, JwtService],
})
export class AppModule {}
