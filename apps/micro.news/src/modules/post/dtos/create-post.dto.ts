import { IsString } from 'class-validator';

export class CreatePostDto {
  @IsString({ message: 'Post title is required' })
  title: string;

  @IsString({ message: 'Post content is required on the application level' })
  content: string;
}
