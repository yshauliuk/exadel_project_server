import { Request, Response } from "express";

const login = (req: Request, res: Response) => {
  res.status(200).json("Success login: " + req.body.email);
};

const register = (req: Request, res: Response) => {
  res.status(200).json("Success register: " + req.body.email);
};

module.exports = {
  login,
  register,
};
