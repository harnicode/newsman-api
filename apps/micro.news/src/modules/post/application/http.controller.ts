import { Body, Controller, Post } from '@nestjs/common';
import { PostService } from '../services/post.service';
import { CreatePostDto } from './dtos/create-post.dto';

@Controller('posts')
export class PostHttpController {
  constructor(private readonly postService: PostService) {}

  @Post()
  createPost(@Body() dto: CreatePostDto) {
    return this.postService.createPost(dto);
  }
}
