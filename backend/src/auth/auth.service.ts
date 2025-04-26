import { CreateUserDto } from './../user/dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './../user/user.service';
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginUserDto } from 'src/user/dto/login-user.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signup(createUserDto: CreateUserDto) {
    const existingUser = await this.userService.findOneByEmail(createUserDto.email);

    if(existingUser) throw new BadRequestException('Email already registered');

    const newUser = await this.userService.create(createUserDto);
    return { message: 'User registered successfully', newUser };
  }

  async login(loginUserDto: LoginUserDto) {
    const { email, password } = loginUserDto;
    const user = await this.userService.findOneByEmail(email);
    
    if (!user) throw new UnauthorizedException('User does not exist');

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    const payload = { sub: user.id, email: user.email };
    const token = this.jwtService.sign(payload);

    return { message: 'Login successful', access_token: token };
  }
}
