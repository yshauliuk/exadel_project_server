import { Router } from "express";

const { login, register } = require("../controllers/authcontroller");

const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);

module.exports = authRouter;
