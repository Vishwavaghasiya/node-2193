const mongoose = require('mongoose');

const busSchema = new mongoose.Schema(
    {
        busName: {
            type: String,
            trim: true,
        },
        busNumber: {
            type: String,
            trim: true,
        },
        driverName: {
            type: String,
            trim: true,
        },
        route: {
            type: String,
            trim: true,
        },
        departureTime: {
            type: String,
            trim: true,
        },
        arrivalTime: {
            type: String,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Bus = mongoose.model('bus', busSchema);
module.exports = Bus