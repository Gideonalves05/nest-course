import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { tag } from "./tags.entity";

@Entity('courses')
export class Course {

	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	description: string;
    

	@JoinTable()
	@ManyToMany(() => tag, tag => tag.courses, {
		cascade: true,
	})
	tags: tag[]
}