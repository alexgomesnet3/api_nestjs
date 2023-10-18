import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers(): string {
    return this.appService.getHello();
  }

  @Get()
  getUserId(): string {
    return this.appService.getHello();
  }

  @Post()
  setUsers(): string {
    return this.appService.setHello();
  }

  @Put()
  setUser(): string {
    return this.appService.setHello();
  }

  @Patch()
  setUserId(): string {
    return this.appService.setHello();
  }

  @Delete()
  deleteUser(): string {
    return this.appService.setHello();
  }
}
