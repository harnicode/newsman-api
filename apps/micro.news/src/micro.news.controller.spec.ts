import { Test, TestingModule } from '@nestjs/testing';
import { MicroNewsController } from './micro.news.controller';
import { MicroNewsService } from './micro.news.service';

describe('MicroNewsController', () => {
  let microNewsController: MicroNewsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MicroNewsController],
      providers: [MicroNewsService],
    }).compile();

    microNewsController = app.get<MicroNewsController>(MicroNewsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(microNewsController.getHello()).toBe('Hello World!');
    });
  });
});
