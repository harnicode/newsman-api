import { IsString } from 'class-validator';

export class CreatePostDto {
  @IsString({ message: 'Post title is required' })
  title: string;
  @IsString({ message: 'Post content is required on the application level' })
  content: string;
  @IsString({message:'Post image is required'})
  image:string
  @IsString({ message: 'Post category is required either Tech, Entertainment or Political' })
  category: string;
  @IsString({ message: 'Post Status is required either Published, Unpublished or Draft' })
  status: string;
  @IsString({ message: 'PublishedAt content is required on the application level' })
  publishedAt: string;
  @IsString({ message: 'UpdatedAt content is required on the application level' })
  updatedAt: string;
}
