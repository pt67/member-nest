import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegControllerController } from './reg-controller/reg-controller.controller';
import { LogControllerController } from './log-controller/log-controller.controller';

@Module({
  imports: [],
  controllers: [AppController, RegControllerController, LogControllerController],
  providers: [AppService],
})
export class AppModule {}
