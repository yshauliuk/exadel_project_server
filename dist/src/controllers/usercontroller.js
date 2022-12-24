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
const helpers_1 = require("../helpers/helpers");
const User = require("../models/userModel");
const userGetData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User.findOne({ _id: req.body.userId });
        res.send(user);
    }
    catch (err) {
        next(err);
    }
});
const userUpdateData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const user = yield User.findOne({ _id: req.body.userId });
        ((_a = req.files) === null || _a === void 0 ? void 0 : _a.photos.name)
            ? (req.files.photos.name = `${+new Date()}@${req.files.photos.name}`)
            : null;
        const update = req.files
            ? {
                fullName: req.body.fullName,
                birthday: req.body.birthday,
                $push: {
                    photos: {
                        name: req.files.photos.name,
                        dateOfLoading: new Date(),
                    },
                },
            }
            : { fullName: req.body.fullName, birthday: req.body.birthday };
        yield (0, helpers_1.uploadFiles)(user.email, req.files);
        yield User.findOneAndUpdate({ _id: req.body.userId }, update);
        res.status(200).send("Your personal data have beed updated");
    }
    catch (err) {
        next(err);
    }
});
module.exports = {
    userGetData,
    userUpdateData,
};
