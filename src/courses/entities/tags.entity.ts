import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Course } from "./courses.entity";

@Entity('tags')
export class tag{
     @PrimaryGeneratedColumn()
     id: number 

     @Column()
     name: string
    

     @ManyToMany(() => Course, course => course.tags)
     courses: Course[]
}