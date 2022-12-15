import { Schema, model } from "mongoose";

const photoSchema = require("./photoModel");

export interface IUser {
  email: string;
  password: string;
  fullName: string;
  birthday: Date;
  dateOfCreation: Date;
  Photos: Schema;
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true },
  password: { type: String, required: true },
  fullName: { type: String },
  birthday: { type: Date },
  dateOfCreation: { type: Date, required: true },
  Photos: [photoSchema],
});

module.exports = model<IUser>("User", userSchema);
