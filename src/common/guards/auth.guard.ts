import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";

/*
What Is an Auth Guard in NestJS?

🔹 Guards are used to:
   Determine whether a request is allowed
   Protect routes from unauthorized access

🔹 Guards run before controllers and can:
   Check JWT tokens
   Check user roles
   Enforce custom auth logic
*/

@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest()

        if (!request.user) {
            throw new UnauthorizedException("User not login")
        }

        return true;
    }
}