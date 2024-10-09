import { PostEntityProps } from 'apps/micro.news/src/domain/post';
import { CreatePostDto } from '../../dtos/create-post.dto';

export class CreatePostCommand {
  readonly props: Omit<PostEntityProps, 'id'>;

  constructor(dto: CreatePostDto) {
    this.props = {
      ...dto,
      status: dto.status as PostEntityProps['status'],
      publishedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      slug: this.generateSlug(dto.title),
    };
  }

  private generateSlug(title: string) {
    const regex = /[!@#$%^&*(),.?":{}|<>]/g;
    const random = Math.floor(Math.random() * 10000);

    const slug = title
      .toLowerCase()
      .replaceAll(regex, ' ')
      .replaceAll('  ', ' ')
      .trim()
      .replaceAll(' ', '-');

    return `${slug}-${random}`;
  }
}
