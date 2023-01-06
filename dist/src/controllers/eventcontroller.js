"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Event = require("../models/eventModel");
const createEvent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Event.create({
            name: req.body.name,
            description: req.body.description,
            start_date: new Date(Date.parse(req.body.start_date)),
            is_online: req.body.online === "yes" ? true : false,
            address: req.body.address,
        });
        res.status(200).send("New event has been created");
    }
    catch (err) {
        next(err);
    }
});
const getAllEvents = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const events = yield Event.find({});
        res.send(events);
    }
    catch (err) {
        next(err);
    }
});
const getUpcomingEvents = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const upcomingEvents = yield Event.find({
            start_date: { $gt: new Date() },
        });
        res.status(200).send(upcomingEvents);
    }
    catch (err) {
        next(err);
    }
});
const deleteEvent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Event.findOneAndDelete({ _id: req.headers.data });
        res.status(200).send("You have successfully deleted the event");
    }
    catch (err) {
        next(err);
    }
});
const registerForEvent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Event.findOneAndUpdate({ _id: req.body.eventId }, { $push: { participants: req.body.userId } });
        res.status(200).send("You successfully registered for event");
    }
    catch (err) {
        next(err);
    }
});
const cancelEventRegistration = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Event.findOneAndUpdate({ _id: req.body.eventId }, { $pull: { participants: req.body.userId } });
        res.status(200).send("You successfully cancel the registartion");
    }
    catch (err) {
        next(err);
    }
});
module.exports = {
    createEvent,
    getAllEvents,
    getUpcomingEvents,
    deleteEvent,
    registerForEvent,
    cancelEventRegistration,
};
