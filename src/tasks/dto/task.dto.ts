import { TaskStatus } from '../task.entity';
import {
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

//Para aplicar las validaciones sobre un dato , deben ejecutarse los decoradores encima del dato

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  //Min Length establece longitud minima
  @MinLength(3)
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  title?: string;
  @IsOptional()
  @IsString()
  description?: string;
  @IsOptional()
  @IsString()
  //Para que valide que sea un dato establecido en un enum se usa el decorador @IsIn
  @IsIn([TaskStatus.DONE, TaskStatus.PENDING, TaskStatus.IN_PROGRESS])
  status?: TaskStatus;
}
