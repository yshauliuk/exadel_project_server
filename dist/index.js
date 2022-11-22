"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv = require("dotenv");
const auth = require('./src/routes/auth');
dotenv.config({ path: "./config.env" });
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(auth);
app.get("/", (req, res) => {
    res.send("Home");
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
