import express, { Express, Request, Response } from "express";
import { connectDB } from "./dbConnection";

const dotenv = require("dotenv");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const auth = require("./src/routes/auth");
const user = require("./src/routes/user");

dotenv.config({ path: "./config.env" });

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(fileUpload());
app.use(express.static(`${process.env.IMG_PATH}`));

app.use(auth);
app.use(user);

app.get("/", (req: Request, res: Response) => {
  res.send("Home");
});

app.listen(process.env.SERVER_PORT, () => {
  connectDB();
  console.log(
    `[server]: Server is running at http://localhost:${process.env.SERVER_PORT}`
  );
});
