import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from "@nestjs/common";

/*
What Is a Pipe in NestJS?

🔹 Pipes are used to:
   Transform input data
   Validate input data
   Throw exceptions if validation fails

🔹 Use cases:
   Convert strings to numbers
   Validate request payloads
   Enforce custom business logic (e.g., "post ID must be even")
*/

@Injectable()
export class PositiveIntPipe implements PipeTransform {
    transform(value: string) {
        const val = parseInt(value, 10);
        if (isNaN(val) || val <= 0) {
            throw new BadRequestException("Please pass integer id")
        }
        return val;
    }
}