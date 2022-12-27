"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const eventSchema = new mongoose_1.Schema({
    name: { type: String },
    description: { type: String },
    start_date: { type: Date },
    is_online: { type: Boolean },
    address: { type: String },
});
module.exports = (0, mongoose_1.model)("Event", eventSchema);
