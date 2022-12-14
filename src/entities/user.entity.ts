import { Entity, Column, Index, BeforeInsert, OneToMany } from 'typeorm';
import bcrypt from 'bcryptjs';
import Model from './model.entity';
import { Account } from './account.entity';

export enum RoleEnumType {
  USER = 'user',
}

@Entity('users')
export class User extends Model {
  @Column()
  name: string;

  @Index('email_index')
  @Column({
    unique: true
  })
  email: string;

  @Column({
    type: 'integer'
  })
  monthly_salary: number;

  @Column({
    type: 'integer'
  })
  monthly_expenses: number;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: RoleEnumType,
    default: RoleEnumType.USER
  })
  role: RoleEnumType.USER;

  @OneToMany(() => Account, (account) => account.user)
  accounts: Account[];

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 12);
  }

  static async comparePasswords(
    candidatePassword: string,
    hashedPassword: string
  ) {
    return await bcrypt.compare(candidatePassword, hashedPassword);
  }
}
