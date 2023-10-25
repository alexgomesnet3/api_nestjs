import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PartialUpdateUserDto, UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers() {
    return this.prisma.user.findMany();
  }

  async getUserId(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async createUser({ name, email, password, phone }: CreateUserDto) {
    return this.prisma.user.create({
      data: {
        name,
        email,
        password,
        phone,
      },
      select: {
        id: true,
      },
    });
  }

  async updateUserId(id: number, data: UpdateUserDto) {
    return this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }

  async partialUpdateUserId(id: number, data: PartialUpdateUserDto) {
    return this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }

  async deleteUserId(id: number) {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
