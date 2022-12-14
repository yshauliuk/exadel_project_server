import express, { Express, Request, Response } from "express";
import { connectDB } from "./dbConnection";


const dotenv = require("dotenv");
const cors = require("cors");

const auth = require("./src/routes/auth");

dotenv.config({ path: "./config.env" });

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(auth);

app.get("/", (req: Request, res: Response) => {
  res.send("Home");
});

app.listen(process.env.SERVER_PORT, () => {
  connectDB();
  console.log(
    `[server]: Server is running at http://localhost:${process.env.SERVER_PORT}`
  );
});
