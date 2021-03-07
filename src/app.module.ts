import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/users.entity';
import { Technos } from './technos/entities/technos.entity';
import { Words } from './words/entities/words.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TechnosModule } from './technos/technos.module';
import { WordsModule } from './words/words.module';

@Module({
  imports: [
    UsersModule,
    TechnosModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'englishproject',
      entities: [Users, Technos, Words],
    }),
    WordsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
