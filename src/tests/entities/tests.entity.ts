import { Entity, PrimaryColumn, Column } from 'typeorm';
 
@Entity()
export class Tests {
  @PrimaryColumn()
  id: number;

  @Column()
  users_id: number;
 
  @Column()
  correct: number;
 
  @Column()
  total: number;

  @Column()
  daytime: Date;
}