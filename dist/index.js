"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dbConnection_1 = require("./dbConnection");
const dotenv = require("dotenv");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const auth = require("./src/routes/auth");
const user = require("./src/routes/user");
const event = require("./src/routes/event");
dotenv.config({ path: "./config.env" });
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors());
app.use(fileUpload());
app.use(express_1.default.static(`${process.env.IMG_PATH}`));
app.use(auth);
app.use(user);
app.use(event);
app.get("/", (req, res) => {
    res.send("Home");
});
app.listen(process.env.SERVER_PORT, () => {
    (0, dbConnection_1.connectDB)();
    console.log(`[server]: Server is running at http://localhost:${process.env.SERVER_PORT}`);
});
