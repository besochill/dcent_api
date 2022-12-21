import { Column, Entity, PrimaryColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ApiProperty } from '@nestjs/swagger';

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
}
