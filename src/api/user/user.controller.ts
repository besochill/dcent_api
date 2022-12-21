import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from './entities/user.entity';

@ApiTags('User Controller')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  async getUser(user: User): Promise<{
    firstname: string;
    email: string;
    username: string;
    lastname: string;
  }> {
    return this.userService.getUser(user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('reset')
  @ApiOperation({ summary: 'Reset the current stream key' })
  async resetStreamKey(key: string) {
    return this.userService.resetStreamKey(key);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('start')
  @ApiOperation({ summary: 'Start a stream' })
  async startStream(@Body('userId') key: string) {
    return this.userService.startStream(key);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('stop')
  @ApiOperation({ summary: 'Stop a stream' })
  async stopStream(@Body('userId') key: string) {
    return this.userService.stopStream(key);
  }
}
