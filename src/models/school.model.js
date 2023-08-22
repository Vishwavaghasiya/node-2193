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
            age: {
                type: Number,
                trim: true,
            },
            grade: {
                type: String,
                trim: true,
            }
        },
        teachers: {
            type: String,
            trim: true,
            subjects : {
                type : String,
                trim : true,
            },
        },
        is_active : {
            type : Boolean,
            default : true,
        },
    }
);

const School = mongoose.model('school' , schoolSchema);
module.exports = School