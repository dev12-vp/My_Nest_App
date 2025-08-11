import { Controller, Get, HttpCode, Post, Param, Body, UseGuards, Req } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { PositiveIntPipe } from '../common/pipes/positive-int.pipe';
import { ApiKeyAuthGuard } from '../common/guards/api-key.guard';
import { Roles } from 'src/common/decorators/role.decorator';
import { AuthGuard } from 'src/common/guards/auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';

@Controller('post')
@UseGuards(AuthGuard,RolesGuard)
export class PostController {
  constructor(private readonly postService: PostService) { }

  @Get('getAllPost')
  getAllPost(): any {
    return this.postService.findAll()
  };

  //custom @Roles() decorator
  @Get('roles')
  @Roles('admin','user')
  getAdminPost(@Req() req : any){
    return { message : `Hello admin ${req.user?.name}`}
  }                                                                                                                                                    

  //implement a custom pipe for validation
  @Get(':id')
  findOne(@Param('id', PositiveIntPipe) id: number): any {
    return this.postService.findOne(id);
  }

  //api auth guard
  @UseGuards(ApiKeyAuthGuard)
  @Post('addPost')
  @HttpCode(201)
  createPost(@Body() dto: CreatePostDto) {
    return this.postService.create(dto);
  }
}
