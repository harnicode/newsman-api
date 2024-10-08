import { IsString } from 'class-validator';

export class CreatePostDto {
  @IsString({ message: 'Post title is required on the application level' })
  title: string;

  @IsString({ message: 'Post content is required on the application level' })
  content: string;

  @IsString({ message: 'Post image is required on the application level' })
  image: string;

  @IsString({ message: 'Post status is required on the application level' })
  status: string;

  @IsString({ message: 'Post category is required on the application level' })
  category: string;
}
