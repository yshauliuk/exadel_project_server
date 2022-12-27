import { Schema, model } from "mongoose";

const photoSchema = require("./photoModel");

export interface IUser {
  email: string;
  password: string;
  fullName: string;
  birthday: Date;
  dateOfCreation: Date;
  photos: Schema;
  isAdmin: boolean;
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true },
  password: { type: String, required: true },
  fullName: { type: String },
  birthday: { type: Date },
  dateOfCreation: { type: Date, required: true },
  photos: [photoSchema],
  isAdmin: { type: Boolean, default: false },
});

module.exports = model<IUser>("User", userSchema);
