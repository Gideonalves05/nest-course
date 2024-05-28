import { dataSourceOptions } from "src/database/database.module";
import { DataSource } from "typeorm";
import { CreateCousesTable1716814660711 } from "../migrations/1716814660711-CreateCousesTable";
import { CreateTagsTable1716823216329 } from "src/migrations/1716823216329-CreateTagsTable";
import { CreateCoursesTagsTable1716825025236 } from "src/migrations/1716825025236-CreateCoursesTagsTable";
import { AddCoursesIdToCoursesTagsTable1716862727337 } from "src/migrations/1716862727337-AddCoursesIdToCoursesTagsTable";
import { AddTagsIdToCoursesTagsTable1716863795057 } from "src/migrations/1716863795057-AddTagsIdToCoursesTagsTable";

export const dataSource = new DataSource({
    ...dataSourceOptions,
    synchronize: false,
    migrations: [CreateCousesTable1716814660711,
                 CreateTagsTable1716823216329,
                 CreateCoursesTagsTable1716825025236,
                 AddCoursesIdToCoursesTagsTable1716862727337,
                 AddTagsIdToCoursesTagsTable1716863795057],
})