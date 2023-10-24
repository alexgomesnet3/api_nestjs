import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto, PartialUpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  async getUserId(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserId(id);
  }

  @Post()
  async createUser(@Body() data: CreateUserDto) {
    return this.userService.createUser(data);
  }

  @Put(':id')
  async updateUserId(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateUserDto,
  ) {
    return this.userService.updateUserId(id, data);
  }

  @Patch(':id')
  async partialUpdateUserId(
    @Param('id', ParseIntPipe) id: number,
    @Body() { name, email, password, phone }: PartialUpdateUserDto,
  ) {
    return {
      method: 'patch',
      id,
      name,
      email,
      password,
      phone,
    };
  }

  @Delete(':id')
  async deleteUserId(@Param('id', ParseIntPipe) id: number) {
    return {
      id,
    };
  }
}
