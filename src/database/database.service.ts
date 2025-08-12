import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class DatabaseService {
    constructor(@Inject('DB_OPTIONS') private options : any) {}

    connect(){
        return `Connecting to DB at ${this.options.host}:${this.options.port}`
    }
}