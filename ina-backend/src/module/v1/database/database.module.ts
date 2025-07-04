import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ENVIRONMENT } from 'src/common/environment';

@Module({
  imports: [MongooseModule.forRoot(ENVIRONMENT.DB.URL)],
})
export class DatabaseModule {}
