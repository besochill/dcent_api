import {Column, Entity, OneToOne, PrimaryColumn, RelationOptions} from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { ApiProperty } from '@nestjs/swagger';
import { Profile } from './profile.entity';

@Entity('users', { schema: 'dca' })
export class User extends BaseEntity {
  @PrimaryColumn()
  @ApiProperty()
  username: string;
  @Column()
  @ApiProperty()
  firstname: string;
  @Column()
  @ApiProperty()
  lastname: string;
  @Column()
  @ApiProperty()
  email: string;
  @Column()
  @ApiProperty()
  password: string;
  @Column()
  @ApiProperty()
  isVerified: boolean;
  @Column()
  @ApiProperty()
  isCreator: boolean;
  @Column()
  @ApiProperty()
  isVendor: boolean;
  @Column()
  @ApiProperty()
  isCustomer: boolean;
  @Column()
  @ApiProperty()
  isStaff: boolean;
  profile: Profile;
}
