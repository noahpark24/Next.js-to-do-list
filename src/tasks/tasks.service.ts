import { Injectable } from '@nestjs/common';
import { UpdateTaskDto } from './dto/task.dto';
import { TasksModel } from './tasks.model';
import { InjectModel } from '@nestjs/sequelize';

//Para los services se usa el decorador injectable ya que podemos inyectar esta clase en otras partes de la api
@Injectable()
export class TasksService {
  //Para usar los metodos de modelo se crea un constructor en la clase
  //private taskModel sirve para que taskModel solo se use dentro de esta clase
  constructor(
    @InjectModel(TasksModel)
    private taskModel: typeof TasksModel,
  ) {}

  //Se usa private para que solo se pueda acceder al metodo o funcion dentro de la misma clase
  //tasks esta simulando ser la db

  async getAllTasks() {
    const allTasks = await this.taskModel.findAll();
    return allTasks;
  }

  async getTaskById(id: string) {
    const task = await this.taskModel.findByPk(id);
    return task;
  }

  async createTask(title: string, description: string) {
    const newTask = await this.taskModel.create({ title, description });
    return newTask;
  }

  //Poniendo por fuera de los () : Task estoy declarando que updateTask retorna una tarea con los datos definidos en la entidad Task
  async updateTask(id: string, updatedFields: UpdateTaskDto) {
    const updatedTask = await this.taskModel.update(updatedFields, {
      where: {
        id: id,
      },
      returning: true,
    });
    return updatedTask[1][0];
  }

  async deleteTask(id: string) {
    await this.taskModel.destroy({ where: { id: id } });
    return 'task deleted succesfully';
  }
}
