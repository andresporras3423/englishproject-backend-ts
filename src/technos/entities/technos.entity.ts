import { Entity, PrimaryColumn, Column } from 'typeorm';
 
@Entity()
export class Technos {
  @PrimaryColumn()
  id: number;
 
  @Column()
  techno_name: string;
 
  @Column()
  techno_status: boolean;
 
  @Column()
  user_id: number;
}