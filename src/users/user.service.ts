import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers() {
    return this.prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        phone: true,
        createdAt: true,
        updateAt: true,
      },
    });
  }

  async getUserId(id) {
    return this.prisma.user.findUnique({
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
        phone: true,
        createdAt: true,
        updateAt: true,
      },
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

  async updateUserId(id, data: CreateUserDto) {
    return this.prisma.user.update({
      data,
      where: {
        id,
      },
    });
  }
}
