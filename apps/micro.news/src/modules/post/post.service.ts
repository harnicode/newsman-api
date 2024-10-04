import { Injectable } from '@nestjs/common';
import { PostEntity, PostEntityProps } from '../../domain/post';

@Injectable()
export class PostService {
  createPost(title: string): PostEntityProps {
    const postId = Math.random() * 1000;

    const post = new PostEntity({ id: postId, title: title });

    return post.toJson();
  }
}
