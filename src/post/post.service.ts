import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto'

interface Posts {
  id: number;
  title: string;
  content: string;
}

@Injectable()
export class PostService {

  private post : Posts[] = [];
  private nextId : number = 1;

  create(dto : CreatePostDto) {
   const post = {id : this.nextId++,...dto};
   this.post.push(post);
   return post;
  }

  findAll(): Posts[] {
    return this.post;
  };

  findOne( id : number): Posts {
    console.log("id",id)
     const postData : any = this.post.filter((f : any) => f.id == id);

     if(!postData.lenght) throw new NotFoundException(`No data get on this id : ${id}`)
    return postData ;
  }

}
