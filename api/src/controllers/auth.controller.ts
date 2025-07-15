import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../providers/auth.service';
import { TUser } from '../types/TUser';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() { email, password }: TCredentials): Promise<{ token: string }> {
    return this.authService.login(email, password);
  }

  @Post('register')
  register(@Body() user: TUser): Promise<boolean> {
    return this.authService.register(user);
  }
}
