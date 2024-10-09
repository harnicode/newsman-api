import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetPostByIdQuery } from '../interface';
import { PostDbRepository } from '../../../framework/db.repository';

@QueryHandler(GetPostByIdQuery)
export class GetPostByIdHandler implements IQueryHandler<GetPostByIdQuery> {
  constructor(private readonly repo: PostDbRepository) {}

  async execute(query: GetPostByIdQuery): Promise<any> {
    return await this.repo.findById(query.id);
  }
}
