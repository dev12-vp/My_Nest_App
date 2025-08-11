import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { ROLES_KEY } from "../decorators/role.decorator";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<string[]>(
            ROLES_KEY,
            [context.getHandler(), context.getClass()]
        )

        if (!requiredRoles) {
            return true
        }

        const { user } = context.switchToHttp().getRequest();
        console.log("user",user);
        console.log("requiredRoles",requiredRoles);
        if (!requiredRoles.includes(user?.role)) {
            throw new ForbiddenException("You do not have permission")
        }

        return true;
    }
}