/* eslint-disable @typescript-eslint/no-unused-vars */

import { PostEntity, PostEntityProps } from './post.entity';

export abstract class PostRepository {
  abstract create(entity: PostEntity): Promise<void>;
  abstract findById(id: string): Promise<PostEntityProps>;
  // Find all posts
  abstract findAll():
  Promise<PostEntityProps[]>;
}
