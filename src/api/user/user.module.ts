import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { LoyaltyModule } from '../loyalty/loyalty.module';
import { Profile } from './entities/profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile]), LoyaltyModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
