import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WordsService } from './words.service';
import { WordsController } from './words.controller';
import { Words } from './entities/words.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Words])],
  controllers: [WordsController],
  providers: [WordsService]
})
export class WordsModule {}
