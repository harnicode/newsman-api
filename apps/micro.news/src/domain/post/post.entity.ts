import { postSchema } from './post.validate';
import {format} from 'date-fns';



export interface PostEntityProps {
  id: string;
  title: string;
  slug: string;
  content: string;
  image: string;
  status: 'Draft' | 'Published' | 'Unpublished';
  category: 'Technology' | 'Entertainment' | 'Political';
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
  get slug():string{
    return this.slug;
  }
  get content():string{
    return this.content;
  }
  get image():string{
    return this.image;

  }

  get status():string{
    return this.status;
  }
 get category(): string{
  return this.category;

 }
  
 get publishedAt(): string {
  // return 'Testing Date'
  const formattedDate = new Date(this.props.publishedAt);

  

  return format(formattedDate, "do MMM, yyyy");
  // return `${date}`
}

get updatedAt(): string {
  const formattedDate = new Date(this.props.updatedAt);
  return format(formattedDate, "do MMM, yyyy");
}

  toJson() {
    return {
      id: this.props.id,
      title: this.props.title,
      slug: this.props.slug,
      image:this.props.image,
      status: this.props.status,
      category:this.props.category,
      content: this.props.content,
      publishedAt:this.publishedAt,
      updatedAt: this.updatedAt,
    };
  }
}
