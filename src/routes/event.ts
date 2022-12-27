import { Router } from "express";

const { createEvent } = require("../controllers/eventcontroller");
const auth = require("../middlewares/auth");

const eventRouter = Router();

eventRouter.post("/event/create-event", auth, createEvent);

module.exports = eventRouter;
