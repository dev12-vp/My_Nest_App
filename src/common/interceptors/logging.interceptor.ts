import { CallHandler, ExecutionContext, Injectable, Logger, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

/* 
What is a Logging Interceptor in NestJS?
  A logging interceptor is a special class in NestJS that “intercepts” incoming requests and outgoing responses, allowing you to:

    🔹Log details like request method, URL, and execution time.
    🔹Measure performance (how long a request takes).
    🔹Debug easily without putting console.log() all over your code.
*/

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    private readonly logger = new Logger(LoggingInterceptor.name)

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const req = context.switchToHttp().getRequest();
        const method = req.method;
        const url = req.url;
        const now = Date.now();
        const user = req.user ? req.user.name : 'Guest'

        this.logger.log(`Incoming request :${user} ${method} ${url}`);

        return next.handle().pipe(
            tap({
                next: () => {
                    this.logger.log(
                        `Response for ${method} ${url} - ${Date.now() - now}ms`
                    )
                },

                error: (err) => {
                    this.logger.error(
                        `${user} ${method} ${url} failed after ${Date.now() - now}ms | Error: ${err.message}`
                    )
                }
            })
        )
    }
};


// Logger : built-in logger for nest js.
//intercept : method required by NestInterceptor;
// context : contains request details (can be HTTP or etc.).
// context.switchToHttp().getRequest() : gets the HTTP Request object.
