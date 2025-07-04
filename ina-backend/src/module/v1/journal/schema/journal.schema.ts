import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
// import { User, UserDocument } from '../../user/schemas/user.schema';
export type JournalDocument = Journal & Document;

@Schema({ timestamps: true })
export class Journal {
  // @Prop({
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: User.name,
  // })
  // user: UserDocument;

  @Prop()
  user: string;

  @Prop()
  transaction_hash: string;

  @Prop({ default: false })
  is_private: boolean;

  @Prop()
  url: string;
}

export const JournalSchema = SchemaFactory.createForClass(Journal);

JournalSchema.pre(/^find/, function (next) {
  const preConditions = {
    isDeleted: false,
  };

  const postConditions = this['_conditions'];

  this['_conditions'] = { ...preConditions, ...postConditions };

  next();
});
