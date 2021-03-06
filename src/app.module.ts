import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/users.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TechnosController } from './technos/technos.controller';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'englishproject',
      entities: [Users],
    })
  ],
  controllers: [AppController, TechnosController],
  providers: [AppService],
})
export class AppModule {}
