"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { login, register } = require("../controllers/authcontroller");
const authRouter = (0, express_1.Router)();
authRouter.post("/register", register);
authRouter.post("/login", login);
module.exports = authRouter;
