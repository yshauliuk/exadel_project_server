import { Router } from "express";

const {
  createEvent,
  getAllEvents,
  getUpcomingEvents,
  deleteEvent,
  registerForEvent,
  cancelEventRegistration,
} = require("../controllers/eventcontroller");
const auth = require("../middlewares/auth");

const eventRouter = Router();

eventRouter.post("/event/create-event", auth, createEvent);
eventRouter.get("/event/get-all-events", auth, getAllEvents);
eventRouter.get("/event/get-upcoming-events", auth, getUpcomingEvents);
eventRouter.delete("/event/delete-event", auth, deleteEvent);
eventRouter.post("/event/register-for-event", auth, registerForEvent);
eventRouter.post("/event/cancel-registration", auth, cancelEventRegistration);

module.exports = eventRouter;
