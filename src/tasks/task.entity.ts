//Uso un enum para establecer typados especificos y no hardcodearlos asi 'PENDING' | 'IN_PROGRESS' | 'DONE'
export enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

//Las entidades se definen usando clases
export class Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
