import { PartialType } from '@nestjs/mapped-types';
import { CreateEmloyeeDto } from './create-emloyee.dto';

export class UpdateEmloyeeDto extends PartialType(CreateEmloyeeDto) {}
