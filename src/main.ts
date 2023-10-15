import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  //Nest factory.create carga un modulo principal que sera el encargado de cargar los demas modulos de la api
  const app = await NestFactory.create(AppModule);
  //Para usar las validaciones se debe agregar esta linea a main.ts
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(8080);
}
bootstrap();
