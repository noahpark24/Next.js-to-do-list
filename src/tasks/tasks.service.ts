import { Injectable } from '@nestjs/common';
import { UpdateTaskDto, UpdateTaskStatusDto } from './dto/task.dto';
import { TasksModel } from './tasks.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(TasksModel)
    private taskModel: typeof TasksModel,
  ) {}

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
