import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KppmSambirejoModule } from './kppm-sambirejo/kppm-sambirejo.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/event',{
      autoCreate: true
    }),
    //online database mongodb cloud
    // MongooseModule.forRoot('mongodb+srv://kppmgkjwsambirejo:30.12.1996@cluster0.ylrop.mongodb.net/event?retryWrites=true&w=majority',{
    //   autoCreate: true
    // }),
    // TypeOrmModule.forRoot({
    //   //database production online komittab
    //   // type: "mysql",
    //   // host: "us-cdbr-east-03.cleardb.com",
    //   // port: 3306,
    //   // username: "bc21c78d772fb6",
    //   // password: "b75d94ad",
    //   // database: "heroku_8661ad82eae056b",
    //   // entities: ["src/**/**.entity{.ts,.js}"],
    //   // synchronize: true

    //   //database production online 1 //dipakai
    //   // type: "mysql",
    //   // host: "us-cdbr-east-03.cleardb.com",
    //   // port: 3306,
    //   // username: "b02f500d91a466",
    //   // password: "0f5e28e9",
    //   // database: "heroku_76d184a91586580",
    //   // entities: ["src/**/**.entity{.ts,.js}"],
    //   // synchronize: true

    //   //database production online 2
    //   // type: "mysql",
    //   // host: "sql10.freesqldatabase.com",
    //   // port: 3306,
    //   // username: "sql10404665",
    //   // password: "9N7AJGkZfF",
    //   // database: "sql10404665",
    //   // entities: ["src/**/**.entity{.ts,.js}"],
    //   // synchronize: true

    //   //database developemnt
    //   // type: "mysql",
    //   // host: "localhost",
    //   // port: 3306,
    //   // username: "root",
    //   // password: "",
    //   // database: "kppmsambirejo_db",
    //   // entities: ["src/**/**.entity{.ts,.js}"],
    //   // synchronize: true
    // }),
    // TypeOrmModule.forFeature([]),
    KppmSambirejoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
