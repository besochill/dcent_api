import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/createUser.dto';
import { LoyaltyService } from '../loyalty/loyalty.service';

@Injectable()
export class UserService {
  private streamKeys: { [key: string]: string } = {};
  private streamingTime: { [key: string]: number } = {};

  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
    private loyaltyService: LoyaltyService,
  ) {}

  async createUser(createUser: CreateUserDto) {
    const user = new User();
    user.username = createUser.username;
    user.firstname = createUser.firstname;
    user.lastname = createUser.lastname;
    user.email = createUser.email;
    user.password = createUser.password;
    user.isVerified = false;
    user.isCreator = false;
    user.isVendor = false;
    user.isCustomer = false;
    user.isStaff = false;
    return await this.usersRepository.save(user);
  }

  async findUser(username: string) {
    return await this.usersRepository.findOne({
      where: {
        username: username,
      },
    });
  }

  private async generateStreamKey() {
    const key =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    if (this.streamKeys[key]) {
      return this.generateStreamKey();
    }
    this.streamKeys[key] = key;
    return key;
  }

  async resetStreamKey(key: string) {
    delete this.streamKeys[key];
    return this.generateStreamKey();
  }

  async startStream(key: string) {
    this.streamKeys[key] = key;
    this.streamingTime[key] = Date.now();
    return key;
  }

  async stopStream(key: string) {
    const time = Date.now() - this.streamingTime[key];
    this.loyaltyService.addPoints(key, time);
    delete this.streamKeys[key];
    delete this.streamingTime[key];
  }

  async getMe(user: string) {
    return await this.usersRepository.findOne({
      where: {
        username: user,
      },
    });
  }
}
