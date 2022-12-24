import { Schema } from "mongoose";

export interface IPhoto {
  name: string;
  dateOfLoading: Date;
}

const photoSchema = new Schema<IPhoto>({
  name: { type: String, required: true },
  dateOfLoading: { type: Date, required: true },
});

module.exports = photoSchema;