import { Request, Response } from "express";

module.exports = (req: Request, res: Response) => {
  res.send("Auth");
};
