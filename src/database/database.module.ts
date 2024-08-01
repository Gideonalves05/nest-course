import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Course } from 'src/courses/entities/courses.entity'
import { tag } from 'src/courses/entities/tags.entity'



@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        return {
          type: 'postgres',
          host: configService.get('DB_HOST'),
          port: Number(configService.get('DB_PORT')),
          username: configService.get('DB_USER'),
          password: configService.get('DB_PASS'),
          database: configService.get('DB_NAME'),
          entities: [Course, tag],
          synchronize: false,
        }
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}