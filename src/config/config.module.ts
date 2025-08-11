import { Module } from "@nestjs/common";
import { DBConfigProvider } from "./db.config.provider";

@Module({
    providers: [DBConfigProvider],
    exports: [DBConfigProvider]
})

export class ConfigModule { }