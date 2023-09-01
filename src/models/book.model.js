const mongoose = require('mongoose');

const stationarySchema = new mongoose.Schema(
    {
        stationary_name: {
            type: String,
            trim: true,
        },
        book_name: {
            type: String,
            trim: true
        },
        auther_name: {
            type: String,
            trim: true,
        },
        language: {
            type: String,
            trim: true,
        },
        review: {
            type: String,
            trim: true,
        },
        price: {
            type: Number,
            trim: true,
        },
        publisher: {
            type: String,
            trim: true
        },
        stationary: {
            type: mongoose.Types.ObjectId,
            ref: "stationary",
        },
        is_active: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

const stationary = mongoose.model('stationary', stationarySchema);
module.exports = stationary