import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
//Para usar sequelize se debe importar su modulo
import { SequelizeModule } from '@nestjs/sequelize';
import { TasksModel } from './tasks/tasks.model';
import { ResponsesService } from './app.services';

//@Module se usa para crear modulos
@Module({
  //imports carga funcionalidades como conectarse a una db o modulos de la api
  imports: [
    TasksModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: null,
      password: null,
      database: 'todoList',
      models: [TasksModel],
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
  controllers: [],
  //Este provider sirve para que toda la app acceda a un service o funcion
  providers: [ResponsesService],
})
export class AppModule {}
