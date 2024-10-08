import { Module } from '@nestjs/common';
import { PostHttpController } from './application/http.controller';
import { PostService } from './services/post.service';
import { PrismaModule } from '../../prisma/src';
import { PostDbRepository } from './framework/db.repository';

@Module({
  imports: [PrismaModule],
  controllers: [PostHttpController],
  providers: [PostService, PostDbRepository],
})
export class PostModule {}
