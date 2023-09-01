const mongoose = require('mongoose');

const mobileSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            trim: true,
        },
        last_name: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
        },
        address: {
            type: String,
            trim: true,
        },
        travel: {
            type: mongoose.Types.ObjectId,
            ref: "travel",
        },
        mobile: {
            type: mongoose.Types.ObjectId,
            ref: "mobile",
        },
        category: {
            type: mongoose.Types.ObjectId,
            ref: "category",
        },
        pharmacy: {
            type: mongoose.Types.ObjectId,
            ref: "pharmacy",
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

const mobile = mongoose.model("mobiles", mobileSchema);
module.exports = mobile;