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
const globals_1 = require("@jest/globals");
const conn_1 = require("../conn");
const User = require("../../src/models/userModel");
(0, globals_1.beforeAll)(() => {
    (0, conn_1.connectDB)();
});
(0, globals_1.afterAll)(() => {
    (0, conn_1.disconnectDB)();
});
(0, globals_1.describe)("Work with User cmanipulation", () => {
    (0, globals_1.test)("creation a new user", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield User.create({
            email: "test@gmail.com",
            password: "test",
        });
        (0, globals_1.expect)(user.email).toBe("test@gmail.com");
    }));
    (0, globals_1.test)("find a new user", () => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield User.findOne({ email: "test@gmail.com" });
        (0, globals_1.expect)(user).not.toBeUndefined();
    }));
});
