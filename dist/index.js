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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
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
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default
            .connect(`mongodb://${process.env.DB_PATH}/exadel_project`)
            .then(() => console.log("[server]: The server is successfully connected to the database"));
    }
    catch (err) {
        console.log(err);
    }
});
app.listen(process.env.SERVER_PORT, () => {
    connectDB();
    console.log(`[server]: Server is running at http://localhost:${process.env.SERVER_PORT}`);
});
