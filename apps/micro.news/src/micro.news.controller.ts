import { Controller, Get } from '@nestjs/common';
import { MicroNewsService } from './micro.news.service';

@Controller()
export class MicroNewsController {
  constructor(private readonly microNewsService: MicroNewsService) {}

  @Get()
  getHello(): string {
    return this.microNewsService.getHello();
  }
}
