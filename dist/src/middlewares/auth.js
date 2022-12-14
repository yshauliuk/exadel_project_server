"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decodedToken = jwt.verify(token, "secret");
        const userId = decodedToken.id;
        req.body.userId = userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw "Invalid user ID";
        }
        else {
            next();
        }
    }
    catch (_a) {
        res.status(401).json({
            error: new Error("Invalid request!"),
        });
    }
};
