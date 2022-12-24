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
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User.findOne({ email: req.body.email });
        user && user.password === req.body.password
            ? res
                .status(200)
                .send(jwt.sign({ id: user.id, email: user.email }, "secret"))
            : res.status(401).send("Bad credentials");
    }
    catch (err) {
        next(err);
    }
});
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User.findOne({ email: req.body.email });
        if (user) {
            res.status(409).send("User already exist");
        }
        else {
            const createdUser = yield User.create({
                email: req.body.email,
                password: req.body.password,
                dateOfCreation: new Date(),
            });
            res
                .status(201)
                .send(jwt.sign({ id: createdUser.id, email: createdUser.email }, "secret"));
        }
    }
    catch (err) {
        next(err);
    }
});
module.exports = {
    login,
    register,
};
