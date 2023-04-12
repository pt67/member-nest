import { Test, TestingModule } from '@nestjs/testing';
import { RegControllerController } from './reg-controller.controller';

describe('RegControllerController', () => {
  let controller: RegControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegControllerController],
    }).compile();

    controller = module.get<RegControllerController>(RegControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
