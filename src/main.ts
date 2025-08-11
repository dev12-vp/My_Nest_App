import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { LoggingInterceptor } from './common/interceptors/logging.interceptor'

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use((req : any ,res : any , next) => {
      req.user = { id: 1, name: 'Vivek', role: 'user' };
    next()
  })

  app.useGlobalInterceptors(new LoggingInterceptor);//create logging interceptor

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
