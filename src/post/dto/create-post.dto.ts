import { IsNotEmpty, IsString } from 'class-validator';

/*
DTOs help you:

 🔹Validate incoming request data
 🔹Define clear API contracts
 🔹Improve code readability and structure
 🔹Enforce types at compile-time (TypeScript)
*/

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}
