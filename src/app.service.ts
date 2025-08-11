import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  constructor(@Inject ('DB_CONFIG')  private dbConfig : any) {}

  getHello(): string {
    return `DB Host: ${this.dbConfig.host}, DB Name: ${this.dbConfig.database}`;
  }
}
