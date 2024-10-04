import { NestFactory } from '@nestjs/core';
import { MicroNewsModule } from './micro.news.module';

async function bootstrap() {
  const app = await NestFactory.create(MicroNewsModule);
  await app.listen(3000);
}
bootstrap();
