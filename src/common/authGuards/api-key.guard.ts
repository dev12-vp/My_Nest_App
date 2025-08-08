import { CanActivate, ExecutionContext, Injectable , UnauthorizedException } from "@nestjs/common";

@Injectable()
export class ApiKeyAuthGuard implements CanActivate {
    private readonly validApiKey = process.env.API_KEY;

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const apiKey = request.headers['x-api-key'];

        if(apiKey !== this.validApiKey){
            throw new UnauthorizedException("Please pass valid api key")
        }

        return true;
    }
}