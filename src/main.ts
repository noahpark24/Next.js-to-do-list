import * as cors from 'cors';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { config } from 'dotenv';
config();

const port = process.env.SERVER_PORT || '3001';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(cors({ origin: process.env.FRONT_URL, credentials: true }));
  await app.listen(port);
}
bootstrap();
