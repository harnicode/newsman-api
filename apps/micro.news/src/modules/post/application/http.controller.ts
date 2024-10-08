import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PostService } from '../services/post.service';
import { CreatePostDto } from './dtos/create-post.dto';

@Controller('posts')
export class PostHttpController {
  constructor(private readonly postService: PostService) {}

  @Get()
  getPost(@Query('id') id: string) {
    return this.postService.getPost(id);
  }

  @Post()
  createPost(@Body() dto: CreatePostDto) {
    return this.postService.createPost(dto);
  }
}
