import { Module } from '@nestjs/common';
import { MicroNewsController } from './micro.news.controller.';
import { MicroNewsService } from './micro.news.service';
import { PostModule } from './modules/post/post.module';

@Module({
  imports: [PostModule],
  controllers: [MicroNewsController],
  providers: [MicroNewsService],
})
export class MicroNewsModule {}
