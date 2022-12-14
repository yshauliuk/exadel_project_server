"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    fullName: { type: String },
    birthday: { type: Date },
    age: { type: Number },
    dateOfCreation: { type: Date, required: true },
    Photos: new mongoose_1.Schema({
        name: { type: String },
        dateOfLoading: { type: Date },
    }),
});
module.exports = (0, mongoose_1.model)("User", userSchema);
