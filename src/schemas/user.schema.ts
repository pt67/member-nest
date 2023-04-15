import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User{
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  location: string;
  
  @Prop()
  username: string;
  
  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

/*

this can be used as alternative

export const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  location: String,
});

*/
