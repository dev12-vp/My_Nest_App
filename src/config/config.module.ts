import { Module } from "@nestjs/common";
import { DBConfigProvider } from "./db.config.provider";
import { ConfigModule as NestConfigModule } from '@nestjs/config';

// @Module({
//     providers: [DBConfigProvider],
//     exports: [DBConfigProvider]
// })

@Module({
    imports: [NestConfigModule.forRoot({
        isGlobal: true
    })],
    providers : [DBConfigProvider],
    exports : [DBConfigProvider]
})
export class ConfigModule { }