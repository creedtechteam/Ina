import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './module/v1/database/database.module';
import { JournalModule } from './module/v1/journal/journal.module';
import { UserModule } from './module/v1/user/user.module';

@Module({
  imports: [DatabaseModule, JournalModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
