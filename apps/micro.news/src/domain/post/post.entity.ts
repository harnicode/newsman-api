import { postSchema } from './post.validate';
import {format} from 'date-fns';

// enum PostEntityStatus {
//   draft,
//   published,
//   unpublished,
// }

const convertDay = (day: string) => {
  var suffix:string;
  var dayToNumber:number = parseInt(day);
  var remainder:number = dayToNumber % 10;
  if(remainder == 1){
    suffix = "st";
  }
  else if(remainder == 2){
    suffix = 'nd';
  }
  else if (remainder == 3){
    suffix = 'rd';
  }
  else {
    suffix = 'th';
  }
  return `${day}${suffix}`;
}

export interface PostEntityProps {
  id: string;
  title: string;
  slug: string;
  content: string;
  image: string;
  status: string;
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

  get image(): string {
    return this.props.image;
  }

  get status(): string {
    return this.props.status;
  }

  get category(): string {
    return this.props.category;
  }

  get publishedAt(): string {
    const date = new Date(this.props.publishedAt);
    return `${convertDay(format(date, 'dd'))} ${format(date, 'MMMM')}, ${format(date, 'yyyy')}`;
  }

  get updatedAt(): string {
    const date = new Date(this.props.updatedAt);
    return format(date, "do MMMM, yyyy");
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
      updatedAt: this.updatedAt,
    };
  }
}
