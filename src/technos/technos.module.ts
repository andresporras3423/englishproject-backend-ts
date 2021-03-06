import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TechnosService } from './technos.service';
import { TechnosController } from './technos.controller';
import { Technos } from './entities/technos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Technos])],
  controllers: [TechnosController],
  providers: [TechnosService]
})
export class TechnosModule {}
