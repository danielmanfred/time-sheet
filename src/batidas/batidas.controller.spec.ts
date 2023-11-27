import { Test, TestingModule } from '@nestjs/testing';
import { BatidasController } from './batidas.controller';

describe('BatidasController', () => {
  let controller: BatidasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BatidasController],
    }).compile();

    controller = module.get<BatidasController>(BatidasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
