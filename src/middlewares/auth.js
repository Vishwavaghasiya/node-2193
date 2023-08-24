const jwt = require("jsonwebtoken");
const { School } = require("../models");
const config = require("../config/config");

const auth = () => async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return next(new Error("Please authenticate!"));
        }

        const decoded = jwt.verify(
            token.replace("Bearer ", ""),
            config.jwt.secret_key
        );

        if (!decoded) {
        }
        const school = await School.findOne({ _id: decoded.school });

        if (!School) {
            return next(new Error("Please authenticate!"));
        }

        req.school = school;
        next();
    } catch (error) {
        return next(new Error(error));
    }
};

module.exports = auth;