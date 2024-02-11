import { Test, TestingModule } from '@nestjs/testing';
import { EmloyeesService } from './emloyees.service';

describe('EmloyeesService', () => {
  let service: EmloyeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmloyeesService],
    }).compile();

    service = module.get<EmloyeesService>(EmloyeesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
