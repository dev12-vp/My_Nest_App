import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseService } from './database/database.service';
import { RequestIdService } from './request-id/request_id.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly dbService: DatabaseService,
    private readonly requestIdService: RequestIdService
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('getService')
  getService() {
    return {
      dbMessage: this.dbService.connect(),
      requestId: this.requestIdService.getId()
    }
  }
}
