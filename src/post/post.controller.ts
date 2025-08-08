import { Controller, Get, HttpCode, Post, Param, Request, Body, UseGuards } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { PositiveIntPipe } from '../common/pipes/positive-int.pipe';
import { ApiKeyAuthGuard } from '../common/authGuards/api-key.guard'

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) { }

  @Get('getAllPost')
  getAllPost(): any {
    return this.postService.findAll()
  };

  @Get(':id')
  findOne(@Param('id', PositiveIntPipe) id: number): any {
    return this.postService.findOne(id);
  }

  @UseGuards(ApiKeyAuthGuard)
  @Post('addPost')
  @HttpCode(201)
  createPost(@Body() dto: CreatePostDto) {
    return this.postService.create(dto);
  }
}
