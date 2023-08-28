const mongoose = require('mongoose');

const mobileSchema = new mongoose.Schema(
    {
        shopName: {
            type: String,
            trim: true
        },
        brand: {
            type: String,
            trim: true
        },
        model: {
            type: String,
            trim: true
        },
        color: {
            type: String,
            trim: true
        },
        operatingSystem: {
            type: String,
            trim: true
        },
        storageCapacity: {
            type: String,
            trim: true
        },
        displayTechnology: {
            type: String,
            trim: true
        },
        camera: {
            type: String,
            trim: true
        },
        batteryCapacity: {
            type: String,
            trim: true
        },
        connectivity: {
            type: String,
            trim: true
        },
        SIMCard: {
            type: String,
            trim: true
        },
        price: {
            type: Number,
            trim: true
        },
        rating: {
            type: String,
            trim: true
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const Mobile = mongoose.model('mobile', mobileSchema);
module.exports = Mobile