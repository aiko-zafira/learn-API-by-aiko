import { Test, TestingModule } from '@nestjs/testing';
import { RaporService } from './rapor.service.js';

describe('RaporService', () => {
  let service: RaporService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RaporService],
    }).compile();

    service = module.get<RaporService>(RaporService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
