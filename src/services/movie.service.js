const { Movie } = require("../models");

const createMovie = async (reqBody) => {
    return Movie.create(reqBody);
}

const getMovieList = async (req,res) => {
    return Movie.find();
};

const deleteMovie = async (movieId) => {
    return Movie.findByIdAndDelete(movieId);
};

const getMovieById = async (movieId) => {
    return Movie.findById(movieId);
};

module.exports = {
    createMovie,
    getMovieList,
    deleteMovie,
    getMovieById
}