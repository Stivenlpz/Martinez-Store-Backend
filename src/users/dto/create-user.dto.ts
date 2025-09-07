import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty({ example: 'Juan Pérez' })
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ example: 'juan@example.com' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty({ example: 'securePassword123' })
  password: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  @ApiProperty({ example: '+573001234567' })
  phone: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Bogotá' })
  city: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Colombia' })
  country: string;

  @IsOptional()
  @IsEnum(['ADMIN', 'USER'], {
    message: "Role must be either 'ADMIN' or 'USER'.",
  })
  @ApiProperty({
    required: false,
    enum: ['ADMIN', 'USER'],
    default: 'USER',
  })
  role?: 'ADMIN' | 'USER' = 'USER';
}
