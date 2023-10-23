import { CreateUserDto } from './create-user.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateUserDto extends CreateUserDto {}

export class PartialUpdateUserDto extends PartialType(CreateUserDto) {}
