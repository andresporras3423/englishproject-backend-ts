import { Controller, Get } from '@nestjs/common';
import {UsersService} from './users.service';
import {Users} from './users.entity';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService){}

    @Get()
  getHello(): string {
    return 'this is a test';
  }

  @Get('all')
    async getAll():Promise<Users[]>{
        return await this.usersService.findAll();
    }
}
