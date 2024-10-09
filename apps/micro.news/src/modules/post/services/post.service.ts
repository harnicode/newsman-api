import { Injectable } from '@nestjs/common';
import { CreatePostDto } from '../application/dtos/create-post.dto';
import { CreatePostCommand } from '../application/commands/interface';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetPostByIdQuery } from '../application/queries/interface';

@Injectable()
export class PostService {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  async getPost(id: string) {
    const query = new GetPostByIdQuery(id);
    return await this.queryBus.execute(query);
  }

  async createPost(dto: CreatePostDto) {
    const command = new CreatePostCommand(dto);
    return this.commandBus.execute(command);
  }
}
