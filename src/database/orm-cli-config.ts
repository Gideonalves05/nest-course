import 'dotenv/config';
import { DataSource, DataSourceOptions } from "typeorm";
import { CreateCousesTable1716814660711 } from "../migrations/1716814660711-CreateCousesTable";
import { CreateTagsTable1716823216329 } from "src/migrations/1716823216329-CreateTagsTable";
import { CreateCoursesTagsTable1716825025236 } from "src/migrations/1716825025236-CreateCoursesTagsTable";
import { AddCoursesIdToCoursesTagsTable1716862727337 } from "src/migrations/1716862727337-AddCoursesIdToCoursesTagsTable";
import { AddTagsIdToCoursesTagsTable1716863795057 } from "src/migrations/1716863795057-AddTagsIdToCoursesTagsTable";
import { Course } from "src/courses/entities/courses.entity";
import { tag } from "src/courses/entities/tags.entity";


export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [Course, tag],
    synchronize: false,
  }
  



export const dataSource = new DataSource({
    ...dataSourceOptions,
    synchronize: false,
    migrations: [CreateCousesTable1716814660711,
                 CreateTagsTable1716823216329,
                 CreateCoursesTagsTable1716825025236,
                 AddCoursesIdToCoursesTagsTable1716862727337,
                 AddTagsIdToCoursesTagsTable1716863795057],
})