import { Injectable, Logger } from '@nestjs/common';
import { PostEntity, PostRepository } from 'apps/micro.news/src/domain/post';
import { PrismaService } from 'apps/micro.news/src/prisma/src';

@Injectable()
export class PostDbRepository implements PostRepository {
  private readonly logger: Logger;

  constructor(private readonly prisma: PrismaService) {
    this.logger = new Logger(PostDbRepository.name);
  }

  async create(entity: PostEntity): Promise<void> {
    try {
      const postJson = entity.toJson();
      const result = await this.prisma.post.create({
        data: {
          ...postJson,
          publishedAt: new Date(postJson.publishedAt),
          updatedAt: new Date(postJson.updatedAt),
        },
      });

      this.logger.log(result);
    } catch (error) {
      this.logger.error(error);
    }
  }

  async findById(id: string): Promise<void> {
    try {
      const result = await this.prisma.post.findUnique({
        where: {
          id: id,
        },
      });

      this.logger.log(result);
    } catch (error) {
      this.logger.error(error);
    }
  }
}
