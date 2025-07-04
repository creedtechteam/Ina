import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: false, sparse: true, unique: true, index: true })
  accountId: string;

  @Prop({ sparse: true, index: true })
  username: string;

  @Prop({ default: null })
  lastLoginAt: Date;

  @Prop({ default: false })
  isNewUser: boolean;

  @Prop({ default: false })
  isDeleted: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre(/^find/, function (next) {
  const preConditions = {
    isDeleted: false,
  };

  const postConditions = this['_conditions'];

  this['_conditions'] = { ...preConditions, ...postConditions };

  next();
});

// UserSchema.pre('validate', async function (next) {
//   if (!this.referralCode) {
//     this.referralCode = BaseHelper.generateReferenceCode();
//   }

//   next();
// });
