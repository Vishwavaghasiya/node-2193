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
        accommodation : {
            type : String,
            trim : true,
            checkInDate : {
                type : String,
                trim : true,
            },
            checkOutDate : {
                type : String,
                trim : true,
            }
        },
        is_active : {
            type : Boolean,
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