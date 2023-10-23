import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

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
  async createUser(@Body() { name, email, password, phone }: CreateUserDto) {
    return {
      name,
      email,
      password,
      phone,
    };
  }

  @Put(':id')
  async updateUserId(@Param() params, @Body() body) {
    return {
      method: 'put',
      params,
      body,
    };
  }

  @Patch(':id')
  async partialUpdateUserId(@Param() params, @Body() body) {
    return {
      method: 'patch',
      params,
      body,
    };
  }

  @Delete(':id')
  async deleteUserId(@Param() params) {
    return {
      params,
    };
  }
}
