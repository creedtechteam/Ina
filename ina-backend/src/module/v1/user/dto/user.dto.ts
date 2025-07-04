import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateWalletUserDto {
  @IsNotEmpty()
  @IsString()
  accountId: string;

  @IsOptional()
  @IsString()
  username?: string;
}
