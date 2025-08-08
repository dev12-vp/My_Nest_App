import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from "@nestjs/common";

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