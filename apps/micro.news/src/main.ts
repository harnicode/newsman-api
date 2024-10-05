import { NestFactory } from '@nestjs/core';
import { BaseModule } from './modules/base.module';

async function bootstrap() {
  const app = await NestFactory.create(BaseModule);
  await app.listen(3000);
}

bootstrap();
