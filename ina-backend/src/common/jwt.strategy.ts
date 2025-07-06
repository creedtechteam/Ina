import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { TokenExpiredError } from '@nestjs/jwt';
import { UserService } from 'src/module/v1/user/services/user.service';
import { ENVIRONMENT } from './environment';
import { AppError } from './app-error.filter';
import { ERROR_CODES } from './error-codes.constant';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super({
      passReqToCallback: true,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: ENVIRONMENT.JWT.SECRET,
    });
  }

  async validate(req: Request, payload: Partial<{ _id: string }>) {
    let errorMessage = 'Invalid auth token, please login again.';
    let isError = false;

    try {
      const { _id } = payload;

      const user = await this.userService.getUserById(_id);

      if (!user) {
        errorMessage = 'Invalid auth token, please login again.';
        isError = true;
      }

      if (isError) {
        throw new AppError(
          errorMessage,
          HttpStatus.UNAUTHORIZED,
          ERROR_CODES.INVALID_ACCESS_TOKEN,
        );
      }

      return user;
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        throw new AppError(
          'Session expired, login again.',
          HttpStatus.UNAUTHORIZED,
          ERROR_CODES.INVALID_ACCESS_TOKEN,
        );
      } else {
        throw new UnauthorizedException('Session expired.');
      }
    }
  }
}
