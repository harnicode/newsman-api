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

  @Get('allPosts')
  getPosts() {
    return this.postService.getPosts();
  }
  // the getPost(id) is coming from post.services.ts

  @Post()
  createPost(@Body() dto: CreatePostDto) {
    return this.postService.createPost(dto);
  }
}
