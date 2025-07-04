import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateWalletUserDto } from '../dto/user.dto';
import { User, UserDocument } from '../schemas/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createWalletUser(payload: CreateWalletUserDto): Promise<UserDocument> {
    const newUser = await this.userModel.create({
      accountId: payload.accountId,
      username: payload.username,
    });

    return newUser;
  }
}
