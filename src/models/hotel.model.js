const mongoose = require('mongoose')

const hotelSchema = new mongoose.Schema(
    {
        hotel_name : {
            type : String,
            trim : true,
        },
        address : {
            type : String,
            trim : true,
        },
        starRating : {
            type : String,
            trim : true,
        },
        amenities : {
            type: String,
            trim : true,
        },
        rooms : {
            type : String,
            trim : true,
        },
        room_number : {
            type : Number,
            trim : true,
        },
        price : {
            type : Number,
            trim : true,
        },
        is_active : {
            type : Boolean,
            default : true,
        },
    },
    {
        timestamps : true,
        versionKey : false,
    }
);

const Hotel = mongoose.model('hotel' , hotelSchema);
module.exports = Hotel