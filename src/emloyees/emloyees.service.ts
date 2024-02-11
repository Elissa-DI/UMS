import { Injectable } from '@nestjs/common';
import { CreateEmloyeeDto } from './dto/create-emloyee.dto';
import { UpdateEmloyeeDto } from './dto/update-emloyee.dto';

@Injectable()
export class EmloyeesService {
  create(createEmloyeeDto: CreateEmloyeeDto) {
    return 'This action adds a new emloyee';
  }

  findAll() {
    return `This action returns all emloyees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} emloyee`;
  }

  update(id: number, updateEmloyeeDto: UpdateEmloyeeDto) {
    return `This action updates a #${id} emloyee`;
  }

  remove(id: number) {
    return `This action removes a #${id} emloyee`;
  }
}
