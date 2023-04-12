import { Test, TestingModule } from '@nestjs/testing';
import { LogControllerController } from './log-controller.controller';

describe('LogControllerController', () => {
  let controller: LogControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogControllerController],
    }).compile();

    controller = module.get<LogControllerController>(LogControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
