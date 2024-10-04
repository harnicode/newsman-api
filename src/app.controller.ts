import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query('name') name: string): string {
    return this.appService.getHello(name);
  }

  @Post()
  greetHello(@Body('name') name: string): string {
    return this.appService.greetHello(name);
  }
}
