import { Schema, model } from "mongoose";

export interface IUser {
  email: string;
  password: string;
  fullName: string;
  birthday: Date;
  age: Number;
  dateOfCreation: Date;
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true },
  password: { type: String, required: true },
  fullName: { type: String },
  birthday: { type: Date },
  age: { type: Number },
  dateOfCreation: { type: Date, required: true },
});

module.exports = model<IUser>("User", userSchema);
