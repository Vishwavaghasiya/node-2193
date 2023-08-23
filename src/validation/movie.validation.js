const Joi = require('joi');

const createMovie = {
    body: Joi.object().keys(
        {
            title: Joi.string().required().trim(),
            director: Joi.string().required().trim(),
            releaseDate: Joi.string().required().trim(),
            genre: Joi.string().required().trim(),
            cast: Joi.string().required().trim(),
            durationMinutes: Joi.number().required().trim(),
            rating: Joi.number().required().trim()
        }
    )
}

/** get book list */
const getMovieList = {
    query : Joi.object().keys({
        search : Joi.string().required().trim(),
        sortBy : Joi.string().required().trim(),
        limit : Joi.string().required().trim(),
        page : Joi.string().required().trim()
    }),
};

module.exports = {
    createMovie,
    getMovieList
}