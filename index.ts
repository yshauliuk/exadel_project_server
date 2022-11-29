import express, { Express, Request, Response } from "express";
import mongoose, { connect } from "mongoose";

const dotenv = require("dotenv");
const auth = require("./src/routes/auth");
const cors = require("cors");

dotenv.config({ path: "./config.env" });

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(auth);

app.get("/", (req: Request, res: Response) => {
  res.send("Home");
});

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:${process.env.DB_PORT}`);
  } catch (err) {
    console.log(err);
  }
};

app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `[server]: Server is running at http://localhost:${process.env.SERVER_PORT}`
  );
});
