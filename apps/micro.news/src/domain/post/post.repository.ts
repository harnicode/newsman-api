/* eslint-disable @typescript-eslint/no-unused-vars */

import { PostEntity } from './post.entity';

export abstract class PostRepository {
  async create(entity: PostEntity): Promise<void> {}
  async findById(id: string): Promise<void> {}
}
