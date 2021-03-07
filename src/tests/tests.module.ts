import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestsService } from './tests.service';
import { TestsController } from './tests.controller';
import { Tests } from './entities/tests.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tests])],
  controllers: [TestsController],
  providers: [TestsService]
})
export class TestsModule {}
