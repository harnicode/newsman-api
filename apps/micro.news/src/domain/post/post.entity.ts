import { postSchema } from './post.validate';

export interface PostEntityProps {
  id: string;
  title: string;
  slug: string;
  content: string;
  image: string;
  status: 'draft' | 'published' | 'unpublished';
  category: string;
  publishedAt: string;
  updatedAt: string;
}

export class PostEntity {
  private constructor(private readonly props: PostEntityProps) {
    this.props = props;
  }

  static create(props: PostEntityProps) {
    const result = postSchema.safeParse(props);

    if (result.success) {
      return {
        success: true,
        entity: new PostEntity(props),
      };
    }

    return {
      success: false,
      error: result.error!.issues[0].message,
    };
  }

  get id(): string {
    return this.props.id;
  }

  get title(): string {
    return this.props.title;
  }

  toJson() {
    return {
      id: this.props.id,
      title: this.props.title,
      slug: this.props.slug,
      content: this.props.content,
      image: this.props.image,
      status: this.props.status,
      category: this.props.category,
      publishedAt: this.props.publishedAt,
      updatedAt: this.props.updatedAt,
    };
  }
}
