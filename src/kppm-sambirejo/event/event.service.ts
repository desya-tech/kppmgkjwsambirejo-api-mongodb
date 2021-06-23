import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Repository } from 'typeorm';
// import { Eventls } from './entities/event.entity';
// import { Image } from './entities/image.entity';
// import { KatEvn } from './entities/kategori_event.entity';
// import { Pelayan } from './entities/pelayan.entity';
// import { Status } from './entities/status.entity';
// import { TpEvent } from './entities/tipe_pelaksanaan_event.entity';
import { extname } from 'path';
import { HttpException, HttpStatus } from '@nestjs/common';
// import { LsGrj } from './entities/list_gereja.entity';
import { promises } from 'dns';
import { InjectModel } from '@nestjs/mongoose';
import { EventDocument, Eventlsm } from './model/event.model';
import { Model } from 'mongoose';



@Injectable()
export class EventService {
    constructor(
        // @InjectRepository(Eventls) private eventRepository: Repository<Eventls>,
        // @InjectRepository(KatEvn) private kategoriEventRepository: Repository<KatEvn>,
        // @InjectRepository(Pelayan) private pelayanRepository: Repository<Pelayan>,
        // @InjectRepository(TpEvent) private tipePelaksanaanRepository: Repository<TpEvent>,
        // @InjectRepository(Status) private statusRepository: Repository<Status>,     
        // @InjectRepository(Image) private imageRepository: Repository<Image>,
        // @InjectRepository(LsGrj) private gerejaRepository: Repository<LsGrj>,

        @InjectModel(Eventlsm.name) private eventModel: Model<EventDocument>
    ) { }

    //mongoDB
    async getEventList(){
        return await this.eventModel.find().exec();
    }

    async save(eventls): Promise<Eventlsm> {
        return new this.eventModel(eventls).save();
    }

    async findOne(id_event: number): Promise<Eventlsm>{
        return await this.eventModel.findOne({id_event});
    }

    async update(id_event: number,eventls): Promise<Eventlsm> {
        return await this.eventModel.findOneAndUpdate({id_event},eventls);
    }

    async delete(id: number): Promise<void> {
        const result = await this.eventModel.deleteOne({id_event: id}).exec();
        if (result.n === 0) {
            throw new NotFoundException('Could not find event..');
        }
    }

    // async  getPelayan(): Promise<Pelayan[]> {
    //     return await this.pelayanRepository.find();
    // }

    // async  getKategori(): Promise<KatEvn[]> {
    //     return await this.kategoriEventRepository.find();
    // }

    // async  getTipeEvent(): Promise<TpEvent[]> {
    //     return await this.tipePelaksanaanRepository.find();
    // }

    // async  getStatus(): Promise<Status[]> {
    //     return await this.statusRepository.find();
    // }

    // async getEventList(): Promise<Eventls[]> {
    //     let data;
    //     try {
    //         const model = await getManager()
    //             .createQueryBuilder(Eventls, 'event')
    //             .select('event.id_event as id_event')
    //             .addSelect('event.nama_event as nama_event')
    //             .addSelect('event.tema_event as tema_event')
    //             .addSelect('event.ayat as ayat')
    //             .addSelect('event.deskripsi_ayat as deskripsi_ayat')
    //             .addSelect('event.deskripsi_event as deskripsi_event')
    //             .addSelect('event.start_event as start_event')
    //             .addSelect('event.end_event as end_event')
    //             .addSelect('kat.nama_kategori as nama_kategori')
    //             .addSelect('pln.nama_pelayan as nama_pelayan')
    //             .addSelect('pln.jabatan as jabatan')
    //             .addSelect('pln.pesan as pesan')
    //             .addSelect('grj.nama_gereja as nama_gereja')
    //             .addSelect('tp.nama_tipe_pelaksanaan as nama_tipe_pelaksanaan')
    //             .addSelect('sts.nama_status as nama_status')
    //             .addSelect('img.path as path')
    //             .addSelect('show_type_id as show_type_id')
    //             .leftJoin(KatEvn, 'kat', 'kat.id_kategori_event=event.id_kategori_event')
    //             .leftJoin(Pelayan, 'pln', 'pln.id_pelayan=event.id_pelayan')
    //             .leftJoin(TpEvent, 'tp', 'tp.id_tipe_pelaksanaan_event=event.id_tipe_pelaksanaan_event')
    //             .leftJoin(Status, 'sts', 'sts.id_status=event.id_status')
    //             .leftJoin(Image, 'img', 'img.id_event=event.id_event')
    //             .leftJoin(LsGrj, 'grj', 'grj.id_gereja=pln.id_gereja')
    //             .orderBy('event.id_event', 'DESC')
    //             .getRawMany()
    //             if (model.length !== 0) {
    //                 data = { 'message': 'data found.','status': true, eventlist: model };
    //             } else {
    //                 data = { 'message': 'No data found.','status': false, eventlist: [] };
    //             }
    //         } catch (error) {
    //             data = error.message;
    //         }
    //         return data;
    // }


    // async getEventById(id: number): Promise<Eventls[]> {
    //     try {
    //         const model = await getManager()
    //             .createQueryBuilder(Eventls, 'event')
    //             .select('event.id_event as id_event')
    //             .addSelect('event.nama_event as nama_event')
    //             .addSelect('event.tema_event as tema_event')
    //             .addSelect('event.ayat as ayat')
    //             .addSelect('event.deskripsi_ayat as deskripsi_ayat')
    //             .addSelect('event.deskripsi_event as deskripsi_event')
    //             .addSelect('event.start_event as start_event')
    //             .addSelect('event.end_event as end_event')
    //             .addSelect('kat.nama_kategori as nama_kategori')
    //             .addSelect('pln.nama_pelayan as nama_pelayan')
    //             .addSelect('pln.jabatan as jabatan')
    //             .addSelect('pln.pesan as pesan')
    //             .addSelect('grj.nama_gereja as nama_gereja')
    //             .addSelect('tp.nama_tipe_pelaksanaan as nama_tipe_pelaksanaan')
    //             .addSelect('sts.nama_status as nama_status')
    //             .addSelect('img.path as path')
    //             .addSelect('show_type_id as show_type_id')
    //             .leftJoin(KatEvn, 'kat', 'kat.id_kategori_event=event.id_kategori_event')
    //             .leftJoin(Pelayan, 'pln', 'pln.id_pelayan=event.id_pelayan')
    //             .leftJoin(TpEvent, 'tp', 'tp.id_tipe_pelaksanaan_event=event.id_tipe_pelaksanaan_event')
    //             .leftJoin(Status, 'sts', 'sts.id_status=event.id_status')
    //             .leftJoin(Image, 'img', 'img.id_event=event.id_event')
    //             .leftJoin(LsGrj, 'grj', 'grj.id_gereja=pln.id_gereja')
    //             .where(`event.id_event = :_id`, { _id: id })
    //             .getRawMany()
    //         if (model.length !== 0) {
    //             return model
    //         } else {
    //             return []
    //         }
    //     } catch (error) {
    //         throw new Error(error.message);
    //     }
    // }

    // async getEventByShowId(id: number): Promise<Eventls[]> {
    //     let data;
    //     try {
    //         const model = await getManager()
    //             .createQueryBuilder(Eventls, 'event')
    //             .select('event.id_event as id_event')
    //             .addSelect('event.nama_event as nama_event')
    //             .addSelect('event.tema_event as tema_event')
    //             .addSelect('event.ayat as ayat')
    //             .addSelect('event.deskripsi_ayat as deskripsi_ayat')
    //             .addSelect('event.deskripsi_event as deskripsi_event')
    //             .addSelect('event.start_event as start_event')
    //             .addSelect('event.end_event as end_event')
    //             .addSelect('kat.nama_kategori as nama_kategori')
    //             .addSelect('pln.nama_pelayan as nama_pelayan')
    //             .addSelect('pln.jabatan as jabatan')
    //             .addSelect('pln.pesan as pesan')
    //             .addSelect('grj.nama_gereja as nama_gereja')
    //             .addSelect('tp.nama_tipe_pelaksanaan as nama_tipe_pelaksanaan')
    //             .addSelect('sts.nama_status as nama_status')
    //             .addSelect('img.path as path')
    //             .addSelect('show_type_id as show_type_id')
    //             .leftJoin(KatEvn, 'kat', 'kat.id_kategori_event=event.id_kategori_event')
    //             .leftJoin(Pelayan, 'pln', 'pln.id_pelayan=event.id_pelayan')
    //             .leftJoin(TpEvent, 'tp', 'tp.id_tipe_pelaksanaan_event=event.id_tipe_pelaksanaan_event')
    //             .leftJoin(Status, 'sts', 'sts.id_status=event.id_status')
    //             .leftJoin(Image, 'img', 'img.id_event=event.id_event')
    //             .leftJoin(LsGrj, 'grj', 'grj.id_gereja=pln.id_gereja')
    //             .where(`event.show_type_id = :_id`, { _id: id })
    //             .getRawMany()
    //         if (model.length !== 0) {
    //             data = { 'message': 'data found.','status': true, eventlist: model };
    //         } else {
    //             data = { 'message': 'No data found.','status': false, eventlist: [] };
    //         }
    //     } catch (error) {
    //         data = error.message;
    //     }
    //     return data;
    // }

    // async createEvent(eventls: Eventls) {
    //     this.eventRepository.save(eventls)
    // }

    // async updateEvent(eventls: Eventls) {
    //     this.eventRepository.save(eventls)
    // }

    // async deleteEvent(id_event){
    //     this.deleteImage(id_event);
    //     return await this.eventRepository.delete(id_event);
    // }

    // async deleteImage(id_event){
    //     //fs to delete file
    //     const fs = require('fs')
    //     const model = await getManager()
    //             .createQueryBuilder(Image, 'img')
    //             .where(`img.id_event = :_id`, { _id: id_event })
    //             .getRawMany()
    //     if(model.length !== 0){
    //         model.forEach(imagedata => {
    //             this.imageRepository.delete(imagedata.img_id_image);
    //             if(imagedata.img_path_file !== null){
    //                 console.log(imagedata.img_path_file, "path_file")
    //                 fs.unlinkSync(imagedata.img_path_file);
    //             }
    //         });
    //     }
    // }

    // async eventImage(image: Image) {
    //     console.log(image)
    //     this.imageRepository.save(image)
    // }

    // async deleteUser(user: user) {
    //     this.userRepository.delete(user);
    // }
}
