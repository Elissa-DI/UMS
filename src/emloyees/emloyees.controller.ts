import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmloyeesService } from './emloyees.service';
import { CreateEmloyeeDto } from './dto/create-emloyee.dto';
import { UpdateEmloyeeDto } from './dto/update-emloyee.dto';

@Controller('emloyees')
export class EmloyeesController {
  constructor(private readonly emloyeesService: EmloyeesService) {}

  @Post()
  create(@Body() createEmloyeeDto: CreateEmloyeeDto) {
    return this.emloyeesService.create(createEmloyeeDto);
  }

  @Get()
  findAll() {
    return this.emloyeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emloyeesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmloyeeDto: UpdateEmloyeeDto) {
    return this.emloyeesService.update(+id, updateEmloyeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emloyeesService.remove(+id);
  }
}
