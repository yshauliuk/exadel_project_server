import mongoose, { Collection } from "mongoose";
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

export const connectDB = async () => {
  try {
    await mongoose
      .connect(`mongodb://${process.env.DB_PATH}/exadel_project_test`)
      .then(() =>
        console.log(
          "[server]: The server is successfully connected to the database(test)"
        )
      );
  } catch (err) {
    console.log(err);
  }
};

export const disconnectDB = async () => {
  mongoose.disconnect();
};
