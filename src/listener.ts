import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';
import * as https from 'https';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // const credentials = {
  //   key: fs.readFileSync('localhost.key', 'utf8'),
  //   cert: fs.readFileSync('localhost.cert', 'utf8')
  // };

  // const expressApp = express();

  
  //configure swagger documentation
  const config = new DocumentBuilder()
  .setTitle('Documentation API')
  .setDescription('The GKJW Sambirejo API description')
  .setVersion('1.0')
  // .addTag('cats')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);

app.enableCors();
  // await app.listen(3000);
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
