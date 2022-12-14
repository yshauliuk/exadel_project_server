"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const server_1 = require("./server");
const dotenv = require("dotenv");
const cors = require("cors");
const auth = require("./src/routes/auth");
dotenv.config({ path: "./config.env" });
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors());
app.use(auth);
app.get("/", (req, res) => {
    res.send("Home");
});
app.listen(process.env.SERVER_PORT, () => {
    (0, server_1.connectDB)();
    console.log(`[server]: Server is running at http://localhost:${process.env.SERVER_PORT}`);
});
