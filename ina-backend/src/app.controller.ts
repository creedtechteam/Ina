import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAppInfo() {
    return await this.appService.getAppInfo();
  }

  @Get('health')
  async getAppHealth() {
    return await this.appService.getAppHealth();
  }
}
