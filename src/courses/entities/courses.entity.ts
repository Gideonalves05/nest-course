import { BeforeInsert, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { tag } from "./tags.entity";
import { randomUUID } from "crypto";

@Entity('courses')
export class Course {

	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	name: string;

	@Column()
	description: string;
    

	@JoinTable()
	@ManyToMany(() => tag, tag => tag.courses, {
		cascade: true,
	})
	tags: tag[]

    @CreateDateColumn({type: 'timestamp'})
	created_at: Date
    

	@BeforeInsert()
	generatedId(){
		if( this.id ){
			return
		}
		this.id = randomUUID()
	}
}