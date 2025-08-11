import { SetMetadata } from "@nestjs/common";

/*
What is the @Roles() Decorator?
 
   🔹It's a custom metadata decorator
   🔹Used to define which roles can access a route
   🔹Paired with a RolesGuard that checks the user's role 

*/

export const ROLES_KEY = 'roles';
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY , roles);
console.log("Roles",Roles);