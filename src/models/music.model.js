const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true,
        },
        artist: {
            type: String,
            trim: true,
        },
        album: {
            type: String,
            trim: true,
        },
        releaseDate: {
            type: String,
            trim: true,
        },
        durationSeconds: {
            type: Number,
            trim: true,
        },
        trackNumber: {
            type: Number,
            trim: true,
        },
        featuredArtists: {
            type: String,
            trim: true,
        },
        composer: {
            type: String,
            trim: true,
        },
        lyricist: {
            type: String,
            trim: true
        },
        language: {
            type: String,
            trim: true,
        },
        playCount: {
            type: Number,
            trim: true,
        },
        rating: {
            type: Number,
            trim: true,
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Music = mongoose.model('music', musicSchema);
module.exports = Music