import { Module } from '@nestjs/common';
import { DefaultController } from './default.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [DefaultController],
  providers: [AppService],
})
export class AppModule {}
