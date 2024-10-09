import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreatePostCommand } from '../interface';
import { PostEntity, PostEntityId } from 'apps/micro.news/src/domain/post';
import { PostDbRepository } from '../../../framework/db.repository';
import { BadRequestException } from '@nestjs/common';

@CommandHandler(CreatePostCommand)
export class CreatePostHandler implements ICommandHandler<CreatePostCommand> {
  constructor(private readonly repo: PostDbRepository) {}

  async execute(command: CreatePostCommand): Promise<any> {
    const postId = PostEntityId.create();

    const result = PostEntity.create({
      ...command.props,
      id: postId,
    });

    if (result.success) {
      return await this.repo.create(result.entity!);
    }

    throw new BadRequestException(result.error);
  }
}
