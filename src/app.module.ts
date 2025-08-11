import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [PostModule,ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
