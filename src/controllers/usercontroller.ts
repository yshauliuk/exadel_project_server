import { NextFunction, Request, Response } from "express";
import { uploadFiles } from "../helpers/helpers";

const User = require("../models/userModel");

const userGetData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.findOne({ _id: req.body.userId });
    res.send(user);
  } catch (err) {
    next(err);
  }
};

const userUpdateData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findOne({ _id: req.body.userId });

    req.files?.photos.name
      ? (req.files.photos.name = `${+new Date()}@${req.files.photos.name}`)
      : null;
      
    const update = req.files
      ? {
          fullName: req.body.fullName,
          birthday: req.body.birthday,
          $push: {
            photos: {
              name: req.files.photos.name,
              dateOfLoading: new Date(),
            },
          },
        }
      : { fullName: req.body.fullName, birthday: req.body.birthday };

    await uploadFiles(user.email, req.files);
    await User.findOneAndUpdate({ _id: req.body.userId }, update);

    res.status(200).send("Your personal data have beed updated");
  } catch (err) {
    next(err);
  }
};



module.exports = {
  userGetData,
  userUpdateData,
};