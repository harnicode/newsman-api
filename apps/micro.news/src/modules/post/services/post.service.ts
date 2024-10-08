import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePostDto } from '../application/dtos/create-post.dto';
import {
  PostEntity,
  PostEntityId,
  PostEntityProps,
} from '../../../domain/post';
import { PostDbRepository } from '../framework/db.repository';

@Injectable()
export class PostService {
  constructor(private readonly db: PostDbRepository) {}

  async getPost(id: string) {
    return await this.db.findById(id);
  }

  async createPost(dto: CreatePostDto) {
    const postId = PostEntityId.create();

    const result = PostEntity.create({
      id: postId,
      title: dto.title,
      content: dto.content,
      image: dto.image,
      category: dto.category,
      slug: this.generateSlug(dto.title),
      publishedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      status: dto.status as PostEntityProps['status'],
    });

    if (result.success) {
      return await this.db.create(result.entity!);
    }

    throw new BadRequestException(result.error);
  }

  private generateSlug(title: string) {
    const regex = /[!@#$%^&*(),.?":{}|<>]/g;
    const random = Math.floor(Math.random() * 10000);

    const slug = title
      .toLowerCase()
      .replaceAll(regex, ' ')
      .replaceAll('  ', ' ')
      .trim()
      .replaceAll(' ', '-');

    return `${slug}-${random}`;
  }
}
