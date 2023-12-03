import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Email Address',
    default: 'xyz@gmail.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Password',
  })
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: "User's Full name",
    default: 'John Doe',
  })
  @IsNotEmpty()
  name: string;
}
