const { date } = require('joi');
const mongoose = require('mongoose');

const travelSchema = new mongoose.Schema(
    {
        tripName : {
            type : String,
            trim : true,
        },
        destination : {
            type : String,
            trim : true,
        },
        startDate : {
            type : String,
            trim : true,
        },
        endDate : {
            type : String,
            trim : true,
        },
        travelers : {
            type : String,
            trim : true,
        },
        bus: {
            type: mongoose.Types.ObjectId,
            ref: "bus",
        },
        is_active : {
            type : Boolean,
            default : true,
            trim : true,
        }
    },
    {
        timestamps : true,
        versionKey : false,
    }
);

const Travel = mongoose.model('travel' , travelSchema);
module.exports = Travel