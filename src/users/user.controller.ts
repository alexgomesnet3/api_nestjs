import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUsers() {
    return {
      users: [],
    };
  }

  @Get(':id')
  async getUserId(@Param() params) {
    return {
      params,
      user: {},
    };
  }

  @Post()
  async createUser(@Body() body) {
    return {
      body,
    };
  }
}
