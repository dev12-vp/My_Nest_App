import { Injectable, Scope } from "@nestjs/common";
import { randomUUID } from "crypto";

/* 
What is an Injection Scope?
  In NestJS, injection scope decides how long a provider (service) instance lives and how it’s shared between requests or parts of the app.,
  
  By default, NestJS providers are singleton (one instance for the whole app).
  You can change this:

  🔹Scope.DEFAULT → Singleton
  🔹Scope.TRANSIENT → New instance every time it’s injected
  🔹Scope.REQUEST → New instance per HTTP request
*/

@Injectable({ scope: Scope.REQUEST })
export class RequestIdService {
    private readonly requestId: string

    constructor() {
        this.requestId = randomUUID()
    }

    getId() {
        return this.requestId
    }
}