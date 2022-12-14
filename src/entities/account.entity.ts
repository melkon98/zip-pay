import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import Model from './model.entity';
import { User } from './user.entity';

@Entity('accounts')
export class Account extends Model {
  @Column({
    unique: true
  })
  title: string;

  @Column({
    type: 'float',
    default: 0,
  })
  balance: number;

  @ManyToOne(() => User, (user) => user.accounts)
  @JoinColumn()
  user!: User;
}
