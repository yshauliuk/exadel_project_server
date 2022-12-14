"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth = require("../middlewares/auth");
const userData = require('../controllers/usercontroller');
const userRouter = (0, express_1.Router)();
userRouter.get("/user/get-data", auth, userData);
module.exports = userRouter;
