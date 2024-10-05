import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  createPost(title: string) {
    const postId = Math.random() * 1000;

    return {
      id: postId,
      title: title,
    };
  }
}
