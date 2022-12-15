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
const User = require("../models/userModel");
const userGetData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User.findOne({ _id: req.body.userId });
        res.send(user);
    }
    catch (err) {
        console.log(err);
    }
});
const userUpdateData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield User.findOneAndUpdate({ _id: req.body.userId }, {
            fullName: req.body.fullName,
            birthday: req.body.birthday,
        });
        res.status(200).send("Your personal data have beed updated");
    }
    catch (err) {
        console.log(err);
    }
});
module.exports = {
    userGetData,
    userUpdateData,
};
