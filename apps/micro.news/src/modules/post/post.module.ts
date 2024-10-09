import { Module } from '@nestjs/common';
import { PostHttpController } from './application/http.controller';
import { PostService } from './services/post.service';
import { PrismaModule } from '../../prisma/src';
import { PostDbRepository } from './framework/db.repository';
import { PostCommandHandlers } from './application/commands/handlers/handler';
import { CqrsModule } from '@nestjs/cqrs';
import { PostQueryHandlers } from './application/queries/handlers/handlers';

@Module({
  imports: [PrismaModule, CqrsModule],
  controllers: [PostHttpController],
  providers: [
    PostService,
    PostDbRepository,
    ...PostCommandHandlers,
    ...PostQueryHandlers,
  ],
})
export class PostModule {}
