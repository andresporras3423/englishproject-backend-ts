import { Entity, PrimaryColumn, Column } from 'typeorm';
 
@Entity()
export class Users {
  @PrimaryColumn()
  id: number;
 
  @Column()
  username: string;
 
  @Column()
  email: string;
 
  @Column()
  pass: string;
}