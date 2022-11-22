import express, { Express, Request, Response } from "express";
const dotenv = require("dotenv");
const auth = require('./src/routes/auth')

dotenv.config({ path: "./config.env" });

const app: Express = express();
const port = process.env.PORT;

app.use(auth);

app.get("/", (req: Request, res: Response) => {
  res.send("Home");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
