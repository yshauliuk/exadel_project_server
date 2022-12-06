import { Schema, model, modelNames } from "mongoose";

interface IUser {
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = model<IUser>("User", userSchema);
