"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const login = (req, res) => {
    res.status(200).json("Success login: " + req.body.email);
};
const register = (req, res) => {
    res.status(200).json("Success register: " + req.body.email);
};
module.exports = {
    login,
    register,
};
