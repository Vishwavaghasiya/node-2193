const { Movie } = require("../models");

/**Create record */
const createMovie = async (reqBody) => {
    return Movie.create(reqBody);
}

/**Get list */
const getMovieList = async (req, res) => {
    return Movie.find({ $or: [{ is_active: true }] });
};

/**Delete record */
const deleteRecord = async (movieId) => {
    return Movie.findByIdAndDelete(movieId);
};

/**Find by id */
const getMovieById = async (movieId) => {
    return Movie.findById(movieId);
};

/**Update record */
const updateMovie = async (movieId, updateBody) => {
    return Movie.findByIdAndUpdate(movieId, { $set: updateBody });
}

module.exports = {
    createMovie,
    getMovieList,
    deleteRecord,
    getMovieById,
    updateMovie
}