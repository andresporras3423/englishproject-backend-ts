import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TechnosController } from './technos/technos.controller';
import { UsersController } from './users/users.controller';

@Module({
  imports: [],
  controllers: [AppController, TechnosController, UsersController],
  providers: [AppService],
})
export class AppModule {}
