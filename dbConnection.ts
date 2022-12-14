import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose
      .connect(`mongodb://${process.env.DB_PATH}/exadel_project`)
      .then(() =>
        console.log(
          "[server]: The server is successfully connected to the database"
        )
      );
  } catch (err) {
    console.log(err);
  }
};
