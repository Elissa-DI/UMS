import { Test, TestingModule } from '@nestjs/testing';
import { EmloyeesController } from './emloyees.controller';
import { EmloyeesService } from './emloyees.service';

describe('EmloyeesController', () => {
  let controller: EmloyeesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmloyeesController],
      providers: [EmloyeesService],
    }).compile();

    controller = module.get<EmloyeesController>(EmloyeesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
