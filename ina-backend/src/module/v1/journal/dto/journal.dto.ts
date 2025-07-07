import {
  ArrayNotEmpty,
  IsArray,
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

  @IsArray()
  @ArrayNotEmpty()
  @IsEnum(TagEnum, { each: true })
  tags: TagEnum[];

  @IsBoolean()
  @IsOptional()
  is_private?: boolean;
}
