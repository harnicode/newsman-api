import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dtos/create-post.dto';
import { PostEntity, PostEntityId, PostEntityProps } from '../../domain/post';
import { date } from 'zod';


@Injectable()
export class PostService {
  createPost(dto: CreatePostDto) {
    const postId = PostEntityId.create();

    const result = PostEntity.create({
      id: postId,
      title: dto.title,
      image: dto.image,
      content: dto.content,
      slug: this.generateSlug(dto.title),
      publishedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      status: dto.status as PostEntityProps['status'],
      category: dto.category as PostEntityProps['category']
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
