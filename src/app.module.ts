import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { TasksModel } from './tasks/tasks.model';
import { ResponsesService } from './app.services';
import { config } from 'dotenv';
config();

@Module({
  imports: [
    TasksModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [TasksModel],
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [ResponsesService],
})
export class AppModule {}
