import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { Public } from 'src/common/public.decorator';
import { ResponseMessage } from 'src/common/response.decorator';
import { WalletLoginDto } from '../dto/user.dto';
import { RESPONSE_CONSTANT } from 'src/common/response.constant';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post('wallet/login')
  @ResponseMessage(RESPONSE_CONSTANT.USER.LOGIN_SUCCESS)
  async walletLogin(@Body() payload: WalletLoginDto) {
    return await this.userService.loginWithWallet(payload);
  }
}
