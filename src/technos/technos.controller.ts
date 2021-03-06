import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TechnosService } from './technos.service';
import { CreateTechnoDto } from './dto/create-techno.dto';
import { UpdateTechnoDto } from './dto/update-techno.dto';

@Controller('technos')
export class TechnosController {
  constructor(private readonly technosService: TechnosService) {}

  @Post()
  create(@Body() createTechnoDto: CreateTechnoDto) {
    return this.technosService.create(createTechnoDto);
  }

  @Get()
  findAll() {
    return this.technosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.technosService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTechnoDto: UpdateTechnoDto) {
    return this.technosService.update(+id, updateTechnoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.technosService.remove(+id);
  }
}
