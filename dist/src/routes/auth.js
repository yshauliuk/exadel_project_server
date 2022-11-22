"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth = require("../controllers/authcontroller");
const app = (0, express_1.Router)();
app.get("/auth", auth);
module.exports = app;
