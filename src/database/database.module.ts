// src/database/database.module.ts
import { DynamicModule, Module } from '@nestjs/common';
import { DatabaseService } from './database.service';

/* A Dynamic Module in NestJS is used when you need a module whose configuration is flexible and can change at runtime — instead of being hardcoded.*/

export interface DatabaseModuleOptions {
  host: string;
  port: number;
}

@Module({})
export class DatabaseModule {
  static forRoot(options: DatabaseModuleOptions): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: 'DB_OPTIONS',
          useValue: options,
        },
        DatabaseService,
      ],
      exports: ['DB_OPTIONS', DatabaseService],
    };
  }
}
