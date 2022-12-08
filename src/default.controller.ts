import { All, Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class DefaultController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @All('/forward/:templateId')
  async forward(@Param('templateId') templateId: string) {
    await this.appService.forward(templateId);
  }
}
