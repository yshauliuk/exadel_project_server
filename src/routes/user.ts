import { Router } from "express";

const auth = require("../middlewares/auth");
const userData = require('../controllers/usercontroller')
const userRouter = Router();

userRouter.get("/user/get-data", auth, userData);

module.exports = userRouter;
