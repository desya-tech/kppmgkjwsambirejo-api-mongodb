import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"
import { Document } from "mongoose";

export type EventDocument = Eventlsm & Document;

@Schema()
export class Eventlsm{

  @Prop()
  id_event: number;

  @Prop()
  nama_event: string;

  @Prop()
  start_event: Date;

  @Prop()
  end_event: Date;

  @Prop()
  tema_event: string;

  @Prop()
  ayat: string;

  @Prop()
  id_kategori_event: number;

  @Prop()
  deskripsi_event: string;

  @Prop()
  deskripsi_ayat: string;

  @Prop()
  id_pelayan: number;

  @Prop()
  id_tipe_pelaksanaan_event: number;

  @Prop()
  id_status: number;
  
  @Prop()
  show_type_id: number;
}

export const EventSchema = SchemaFactory.createForClass(Eventlsm);