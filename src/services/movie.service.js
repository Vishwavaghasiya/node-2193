const { Movie } = require("../models");

const createMovie = async (reqBody) => {
    return Movie.create(reqBody);
}

const getMovieList = async (req, res) => {
    return Movie.find({ $or: [{ is_active: false }] });
};

const deleteRecord = async (movieId) => {
    return Movie.findByIdAndDelete(movieId);
};

const getMovieById = async (movieId) => {
    return Movie.findById(movieId);
};

module.exports = {
    createMovie,
    getMovieList,
    deleteRecord,
    getMovieById
}