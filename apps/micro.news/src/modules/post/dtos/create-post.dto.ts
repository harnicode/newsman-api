import { IsString } from 'class-validator';

export class CreatePostDto {
  @IsString({ message: 'Post title is required' })
  title: string;

  @IsString({ message: 'Post content is required on the application level' })
  content: string;

  @IsString({ message: 'Post content is required on the application level' })
  status: string;

  @IsString({ message: 'Post content is required on the application level' })
  category: string;

  @IsString({ message: 'Post content is required on the application level' })
  publishedAt: string;

  @IsString({ message: 'Post content is required on the application level' })
  updatedAt: string;

  @IsString({ message: 'Post content is required on the application level' })
  image: string;
}
