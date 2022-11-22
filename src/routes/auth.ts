import { Router } from "express";
const auth = require("../controllers/authcontroller");

const app = Router();

app.get("/auth", auth);

module.exports = app;
