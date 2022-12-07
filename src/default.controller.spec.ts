import { Test, TestingModule } from '@nestjs/testing';
import { DefaultController } from './default.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: DefaultController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DefaultController],
      providers: [AppService],
    }).compile();

    appController = app.get<DefaultController>(DefaultController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
