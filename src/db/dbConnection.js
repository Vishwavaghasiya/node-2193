const mongoose = require("mongoose");
// config file import
const config = require("../config/config");

const connectDB = async () => {
    mongoose
        .connect(config.mongodb.url, config.mongodb.options)
        .then((data) => {
            console.log("Database connection successfully");
        })
        .catch((error) => {
            console.log("Database connrction error : !", error);
        });
};

module.exports = { connectDB };