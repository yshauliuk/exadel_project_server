import { Schema, model } from "mongoose";

export interface IUser {
  email: string;
  password: string;
  fullName: string;
  birthday: Date;
  age: number;
  dateOfCreation: Date;
  Photos: Schema;
}

export interface IPhoto {
  name: string;
  dateOfLoading: Date;
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true },
  password: { type: String, required: true },
  fullName: { type: String },
  birthday: { type: Date },
  age: { type: Number },
  dateOfCreation: { type: Date, required: true },
  Photos: new Schema<IPhoto>({
    name: { type: String },
    dateOfLoading: { type: Date },
  }),
});

module.exports = model<IUser>("User", userSchema);
