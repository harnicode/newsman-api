import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllPostsQuery } from '../interface';
import { PostDbRepository } from '../../../framework/db.repository';
import { PostEntityProps } from 'apps/micro.news/src/domain/post/post.entity';

@QueryHandler(GetAllPostsQuery)
export class GetAllPostsHandler implements IQueryHandler<GetAllPostsQuery> {
  constructor(private readonly repo: PostDbRepository) {}

  async execute(query: GetAllPostsQuery): Promise<PostEntityProps[]> {
    return await this.repo.findAll();
  }
}
