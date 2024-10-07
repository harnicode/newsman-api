import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dtos/create-post.dto';
import { PostEntity, PostEntityId } from '../../domain/post';

@Injectable()
export class PostService {
  createPost(dto: CreatePostDto) {
    const postId = PostEntityId.create();

    const result = PostEntity.create({
      id: postId,
      title: dto.title,
      content: dto.content,
      slug: this.generateSlug(dto.title),
      image: dto.image,
      status: dto.status,
      category: dto.category,
      publishedAt: dto.publishedAt,
      updatedAt: new Date().toISOString(),
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
