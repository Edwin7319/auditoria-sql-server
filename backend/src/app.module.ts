import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: '192.168.142.134',
      port: 1433,
      username: 'sa',
      password: '73!Juandesalinas',
      database: 'pedidos',
      entities: [],
      synchronize: true,
      logging: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
