import { Request, Response } from "express";

const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const login = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    user && user.password === req.body.password
      ? res
          .status(200)
          .send(jwt.sign({ id: user.id, email: user.email }, "secret"))
      : res.status(401).send("Bad credentials");
  } catch (err) {
    console.log(err);
  }
};

const register = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      res.status(409).send("User already exist");
    } else {
      const createdUser = await User.create({
        email: req.body.email,
        password: req.body.password,
        dateOfCreation: new Date(),
      });
      res
        .status(201)
        .send(
          jwt.sign({ id: createdUser.id, email: createdUser.email }, "secret")
        );
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  login,
  register,
};
