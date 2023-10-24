import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
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
}
