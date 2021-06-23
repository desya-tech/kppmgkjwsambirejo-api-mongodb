import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';
import * as https from 'https';
import * as express from 'express';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   // const credentials = {
//   //   key: fs.readFileSync('localhost.key', 'utf8'),
//   //   cert: fs.readFileSync('localhost.cert', 'utf8')
//   // };

//   // const expressApp = express();

  
//   //configure swagger documentation
//   const config = new DocumentBuilder()
//   .setTitle('Documentation API')
//   .setDescription('The GKJW Sambirejo API description')
//   .setVersion('1.0')
//   // .addTag('cats')
//   .build();
// const document = SwaggerModule.createDocument(app, config);
// SwaggerModule.setup('api', app, document);

// app.enableCors();
//   // await app.listen(3000);
//   await app.listen(process.env.PORT || 3001);
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://fmzrzewf:YMza0SmNtd4qN3w8dXp3yANNDEhnrxru@beaver.rmq.cloudamqp.com/fmzrzewf'],
      queue: 'main_queue',
      queueOptions: {
        durable: false
      },
    },
  });

  await app.listen(() => console.log("Microservice Is Listening"));
}
bootstrap();
