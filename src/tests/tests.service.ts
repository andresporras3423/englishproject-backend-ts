import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Tests } from './entities/tests.entity';

@Injectable()
export class TestsService {
  constructor(@InjectRepository(Tests) private testsRepo: Repository<Tests>) {}

  create(createTestDto: CreateTestDto) {
    return 'This action adds a new test';
  }

  findAll() {
    return this.testsRepo.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} test`;
  }

  update(id: number, updateTestDto: UpdateTestDto) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}
