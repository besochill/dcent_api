import { Column, Entity, OneToOne, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from './user.entity';
import { JoinColumn } from 'typeorm/browser';
@Entity('profile', { schema: 'dca' })
export class Profile {
  @PrimaryColumn()
  @ApiProperty()
  avatar: string;

  @Column()
  @ApiProperty()
  cover: string;

  @Column()
  @ApiProperty()
  bio: string;

  @Column()
  @ApiProperty()
  location: string;

  @OneToOne(() => User, (user) => user.profile)
  user: User;
}
