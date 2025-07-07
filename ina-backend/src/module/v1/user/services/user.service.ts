import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ClientSession, FilterQuery, Model, UpdateQuery } from 'mongoose';
import { CreateWalletUserDto, WalletLoginDto } from '../dto/user.dto';
import { User, UserDocument } from '../schemas/user.schema';
import { ENVIRONMENT } from 'src/common/environment';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async createWalletUser(payload: CreateWalletUserDto): Promise<UserDocument> {
    const newUser = await this.userModel.create({
      walletAddress: payload.walletAddress,
    });

    return newUser;
  }

  async findOneQuery(query: FilterQuery<UserDocument>) {
    return await this.userModel.findOne(query);
  }

  async updateQuery(
    filter: FilterQuery<UserDocument>,
    payload: UpdateQuery<UserDocument>,
    session?: ClientSession,
  ): Promise<UserDocument> {
    const updatedUser = await this.userModel.findOneAndUpdate(filter, payload, {
      session,
    });

    return updatedUser;
  }

  async getUserById(
    id: string,
    populateFields?: string,
  ): Promise<UserDocument> {
    return this.userModel.findOne({ _id: id }).populate(populateFields);
  }

  async loginWithWallet(payload: WalletLoginDto) {
    let user = (await this.findOneQuery({
      walletAddress: payload.walletAddress,
    })) as UserDocument;

    const isNewUser = !user;
    const now = new Date();

    if (user) {
      await this.updateQuery(
        { _id: user._id },
        {
          $set: {
            lastLoginAt: now,
          },
        },
      );
    } else {
      user = await this.createWalletUser({
        walletAddress: payload.walletAddress,
      });
    }

    // Generate JWT token
    const token = this.jwtService.sign(
      { _id: user._id, walletAddress: user.walletAddress },
      {
        secret: ENVIRONMENT.JWT.SECRET,
      },
    );

    return {
      isNewUser,
      token,
      user: {
        _id: user._id,
        walletAddress: user.walletAddress,
        profilePhoto: user.profilePhoto,
        username: user.username,
      },
    };
  }
}
