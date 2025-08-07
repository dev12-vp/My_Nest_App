import { Controller , Get, HttpCode, Post,Param, Request, Body} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto'

@Controller('post')
export class PostController {
   constructor(private readonly postService : PostService){}

   @Get('getAllPost')
   getAllPost() : any {
    return this.postService.findAll()
   };

  @Get(':id')
  findOne(@Param('id') id: number) : any {
    return this.postService.findOne(id);
  }

   @Post('addPost')
   @HttpCode(201)
   createPost(@Body() dto : CreatePostDto) {
    return this.postService.create(dto);
   }
}
