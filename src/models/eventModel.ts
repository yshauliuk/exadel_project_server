import { Schema, model } from "mongoose";

export interface IEvent {
  name: string;
  description: string;
  start_date: Date;
  is_online: boolean;
  address: string;
}

const eventSchema = new Schema<IEvent>({
  name: { type: String },
  description: { type: String },
  start_date: { type: Date },
  is_online: { type: Boolean },
  address: { type: String },
});

module.exports = model<IEvent>("Event", eventSchema);
