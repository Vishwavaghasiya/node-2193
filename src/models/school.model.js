const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema(
    {
        schoolName: {
            type: String,
            trim: true,
        },
        address: {
            type: String,
            trim: true,
        },
        principal: {
            type: String,
            trim: true,
        },
        students: {
            type: String,
            trim: true,
        },
        grade: {
            type: String,
            trim: true,
        },
        teachers: {
            type: String,
            trim: true,
        },
        subjects: {
            type: String,
            trim: true,
        },
        book: {
            type: mongoose.Types.ObjectId,
            ref: "book",
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const School = mongoose.model('school', schoolSchema);
module.exports = School