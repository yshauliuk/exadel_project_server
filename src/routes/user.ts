import { Router } from "express";

const auth = require("../middlewares/auth");
const {userGetData, userUpdateData} = require("../controllers/usercontroller");
const userRouter = Router();

userRouter.get("/user/get-data", auth, userGetData);
userRouter.post("/user/update-data", auth, userUpdateData);

module.exports = userRouter;
