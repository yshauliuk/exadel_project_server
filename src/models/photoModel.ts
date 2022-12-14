import { Schema } from "mongoose";

export interface IPhoto {
  name: string;
  dateOfLoading: Date;
}

const photoSchema = new Schema<IPhoto>({
  name: { type: String },
  dateOfLoading: { type: Date },
});

module.exports = photoSchema;
