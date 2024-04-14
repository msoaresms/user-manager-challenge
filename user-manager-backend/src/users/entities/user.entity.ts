import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column({ unique: true })
  email: string;

  @Column({ update: false })
  password: string;

  @Column({ default: false })
  isActive: boolean;

  @Column({ default: false })
  isAdmin: boolean;
}
