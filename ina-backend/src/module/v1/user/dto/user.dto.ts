import { IsNotEmpty, IsString } from 'class-validator';

export class CreateWalletUserDto {
  @IsNotEmpty()
  @IsString()
  walletAddress: string;
}

export class WalletLoginDto {
  @IsNotEmpty()
  @IsString()
  walletAddress: string;
}
