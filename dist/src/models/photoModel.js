"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const photoSchema = new mongoose_1.Schema({
    name: { type: String },
    dateOfLoading: { type: Date },
});
module.exports = photoSchema;
