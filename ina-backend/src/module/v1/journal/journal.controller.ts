import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { JournalService } from './journal.service';
import { CreateJournalEntryDto } from './dto/journal.dto';

@Controller('journal')
export class JournalController {
  constructor(private readonly journalService: JournalService) {}

  @Post()
  async createJournalEntry(@Body() payload: CreateJournalEntryDto) {
    return this.journalService.addJournalEntry(payload);
  }

  @Get('user')
  async getUserEntry(@Query('accountId') accountId: string) {
    return this.journalService.getUserEntries(accountId);
  }

  @Get('public')
  async getPublicEntries() {
    return this.journalService.getPublicEntries();
  }
}
