const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
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
        User: {
            type: mongoose.Types.ObjectId,
            ref: "User",
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

const User = mongoose.model("user", userSchema);
module.exports = User;