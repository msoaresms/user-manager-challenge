import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('User')
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: ['ADMIN', 'USER'], default: 'USER' })
  role: string;
}

export enum UserRole {
  ADMIN,
  USER,
}
