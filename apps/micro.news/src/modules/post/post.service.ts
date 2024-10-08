import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dtos/create-post.dto';
import { PostEntity, PostEntityId, PostEntityStatus } from '../../domain/post';
import { date } from 'zod';

@Injectable()
export class PostService {
  createPost(dto: CreatePostDto) {
    const postId = PostEntityId.create();

    const result = PostEntity.create({
      id: postId,
      title: dto.title,
      image: dto.image,
      publishedAt: new Date().toISOString(),
      content: dto.content,
      slug: this.generateSlug(dto.title),
      updatedAt: new Date().toISOString(),
      status: PostEntityStatus.published,
      category: ''
    });

    if (result.success) {
      return result.entity!.toJson();
    }

    throw new BadRequestException(result.error);
  }

  private generateSlug(title: string) {
    const regex = /[!@#$%^&*(),.?":{}|<>]/g;

    return title
      .toLowerCase()
      .replaceAll(regex, ' ')
      .replaceAll('  ', ' ')
      .trim()
      .replaceAll(' ', '-');
  }
}
