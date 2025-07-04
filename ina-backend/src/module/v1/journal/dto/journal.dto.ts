import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { TagEnum } from 'src/module/v1/journal/enums/journal.enum';

export class CreateJournalEntryDto {
  @IsNotEmpty()
  @IsString()
  content: string;

  @IsEnum([TagEnum])
  @IsNotEmpty()
  tags: TagEnum[];

  @IsBoolean()
  @IsOptional()
  is_private?: boolean;
}
