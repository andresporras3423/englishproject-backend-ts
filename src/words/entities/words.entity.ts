import { Entity, PrimaryColumn, Column } from 'typeorm';
 
@Entity()
export class Words {
  @PrimaryColumn()
  id: number;

  @Column()
  users_id: number;

  @Column()
  technos_id: number;
 
  @Column()
  word: string;
 
  @Column()
  translation: string;
}