import { Injectable } from '@nestjs/common';

@Injectable()
export class MicroNewsService {
  getHello(): string {
    return 'Hello World!';
  }
}
