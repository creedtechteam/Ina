import { Module } from '@nestjs/common';
import { JournalService } from './journal.service';
import { JournalController } from './journal.controller';
import { Journal, JournalSchema } from './schema/journal.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Journal.name, schema: JournalSchema }]),
  ],

  controllers: [JournalController],
  providers: [JournalService],
  exports: [JournalService],
})
export class JournalModule {}
