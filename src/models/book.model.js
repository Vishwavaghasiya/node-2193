const mongoose = require('mongoose');

const createBookDetails = new mongoose.Schema(
    {
        book_name: {
            type: String,
            trim: true,
        },
        auther_name: {
            type: String,
            trim: true,
        },
        language : {
            type : String,
            trim : true,
        },
        price: {
            type: Number,
            trim: true,
        },
        createdAt: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

const Book = mongoose.model('book', createBookDetails);
module.exports = Book