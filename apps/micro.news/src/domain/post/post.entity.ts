import { postSchema } from './post.validate';

// enum PostEntityStatus {
//   draft,
//   published,
//   unpublished,
// }

export interface PostEntityProps {
  id: number;
  title: string;
  slug: string;
  content: string;
  // image: string;
  // status: PostEntityStatus;
  // category: string;
  // publishedAt: string;
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

  get id(): number {
    return this.props.id;
  }

  get title(): string {
    return this.props.title;
  }

  toJson() {
    return {
      id: this.id,
      title: this.title,
    };
  }
}
