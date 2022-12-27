"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const { createEvent } = require("../controllers/eventcontroller");
const auth = require("../middlewares/auth");
const eventRouter = (0, express_1.Router)();
eventRouter.post("/event/create-event", auth, createEvent);
module.exports = eventRouter;
