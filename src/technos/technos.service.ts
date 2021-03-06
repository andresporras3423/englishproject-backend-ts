import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTechnoDto } from './dto/create-techno.dto';
import { UpdateTechnoDto } from './dto/update-techno.dto';
import { Technos } from './entities/technos.entity';

@Injectable()
export class TechnosService {
  constructor(@InjectRepository(Technos) private technosRepo: Repository<Technos>) {}

  create(createTechnoDto: CreateTechnoDto) {
    return 'This action adds a new techno';
  }

  findAll() {
    return this.technosRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} techno`;
  }

  update(id: number, updateTechnoDto: UpdateTechnoDto) {
    return `This action updates a #${id} techno`;
  }

  remove(id: number) {
    return `This action removes a #${id} techno`;
  }
}
