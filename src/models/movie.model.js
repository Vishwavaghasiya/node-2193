const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            trim : true,
        },
        director : {
            type : String,
            trim : true,
        },
        releaseDate : {
            type : String,
            trim : true,
        },
        genre : {
            type : String,
            trim : true,
        },
        cast : {
            type : String,
            trim : true,
        },
        durationMinutes : {
            type : Number,
            trim : true,
        },
        rating : {
            type : Number,
            trim : true,
        },
        music: {
            type: mongoose.Types.ObjectId,
            ref: "music",
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

const Movie = mongoose.model('movie' , movieSchema);
module.exports = Movie