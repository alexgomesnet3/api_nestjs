import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
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
