import { NextFunction, Request, Response } from "express";

const Event = require("../models/eventModel");

const createEvent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await Event.create({
      name: req.body.name,
      description: req.body.description,
      start_date: new Date(Date.parse(req.body.start_date)),
      is_online: req.body.online === "yes" ? true : false,
      address: req.body.address,
    });
    res.status(200).send("New event has been created");
  } catch (err) {
    next(err);
  }
};

module.exports = { createEvent };
