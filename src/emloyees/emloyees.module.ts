import { Module } from '@nestjs/common';
import { EmloyeesService } from './emloyees.service';
import { EmloyeesController } from './emloyees.controller';

@Module({
  controllers: [EmloyeesController],
  providers: [EmloyeesService],
})
export class EmloyeesModule {}
