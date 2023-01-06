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

const getAllEvents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const events = await Event.find({});
    res.send(events);
  } catch (err) {
    next(err);
  }
};

const getUpcomingEvents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const upcomingEvents = await Event.find({
      start_date: { $gt: new Date() },
    });
    res.status(200).send(upcomingEvents);
  } catch (err) {
    next(err);
  }
};

const deleteEvent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await Event.findOneAndDelete({ _id: req.headers.data });
    res.status(200).send("You have successfully deleted the event");
  } catch (err) {
    next(err);
  }
};

const registerForEvent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await Event.findOneAndUpdate(
      { _id: req.body.eventId },
      { $push: { participants: req.body.userId } }
    );
    res.status(200).send("You successfully registered for event");
  } catch (err) {
    next(err);
  }
};

const cancelEventRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await Event.findOneAndUpdate(
      { _id: req.body.eventId },
      { $pull: { participants: req.body.userId } }
    );
    res.status(200).send("You successfully cancel the registartion");
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createEvent,
  getAllEvents,
  getUpcomingEvents,
  deleteEvent,
  registerForEvent,
  cancelEventRegistration,
};
