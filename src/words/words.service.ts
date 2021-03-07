import { Injectable } from '@nestjs/common';
import { CreateWordDto } from './dto/create-word.dto';
import { UpdateWordDto } from './dto/update-word.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Words } from './entities/words.entity';

@Injectable()
export class WordsService {
  constructor(@InjectRepository(Words) private wordsRepo: Repository<Words>) {}

  create(createWordDto: CreateWordDto) {
    return 'This action adds a new word';
  }

  findAll() {
    return this.wordsRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} word`;
  }

  update(id: number, updateWordDto: UpdateWordDto) {
    return `This action updates a #${id} word`;
  }

  remove(id: number) {
    return `This action removes a #${id} word`;
  }
}
