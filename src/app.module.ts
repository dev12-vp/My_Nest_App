import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { RequestIdService } from './request-id/request_id.service';

@Module({
  imports: [PostModule, ConfigModule, DatabaseModule.forRoot({ host: 'localhost', port: 5432 })],
  controllers: [AppController],
  providers: [AppService, RequestIdService],
})
export class AppModule { }
