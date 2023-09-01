const mongoose = require('mongoose')

const stationarySchema = new mongoose.Schema(
    {
        stationaryName: {
            type: String,
            trim: true,
        },
        itemCode: {
            type: String,
            trim: true,
        },
        itemName: {
            type: String,
            trim: true,
        },
        category: {
            type: String,
            trim: true,
        },
        price: {
            type: Number,
            trim: true,
        },
        stockQuantity: {
            type: String,
            trim: true,
        },
        manufacturer: {
            type: String,
            trim: true,
        },
        color: {
            type: String,
            trim: true,
        },
        category: {
            type: mongoose.Types.ObjectId,
            ref: "category",
        },
        is_active: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Stationary = mongoose.model('stationary', stationarySchema);
module.exports = Stationary