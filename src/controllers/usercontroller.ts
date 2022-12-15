import { Request, Response } from "express";

const User = require("../models/userModel");

const userGetData = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ _id: req.body.userId });
    res.send(user);
  } catch (err) {
    console.log(err);
  }
};

const userUpdateData = async (req: Request, res: Response) => {
  try {
    await User.findOneAndUpdate(
      { _id: req.body.userId },
      {
        fullName: req.body.fullName,
        birthday: req.body.birthday,
      }
    );
    res.status(200).send("Your personal data have beed updated");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  userGetData,
  userUpdateData,
};
