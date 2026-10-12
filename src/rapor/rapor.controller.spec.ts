import { Test, TestingModule } from '@nestjs/testing';
import { RaporController } from './rapor.controller.js';
import { RaporService } from './rapor.service.js';

describe('RaporController', () => {
  let controller: RaporController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RaporController],
      providers: [RaporService],
    }).compile();

    controller = module.get<RaporController>(RaporController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
