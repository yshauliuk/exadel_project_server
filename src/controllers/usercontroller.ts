import { Request, Response } from "express";

const User = require("../models/userModel");

const userData = async (req: Request, res: Response) => {
  const user = await User.findOne({ id: req.body.userId });
  res.send(user);
};

module.exports = userData;
