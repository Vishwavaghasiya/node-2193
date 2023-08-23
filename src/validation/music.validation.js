const Joi = require('joi');

const createMusic = {
    body: Joi.object().keys(
        {
            title: Joi.string().required().trim(),
            artist: Joi.string().required().trim(),
            album: Joi.string().required().trim(),
            releaseDate: Joi.string().required().trim(),
            durationSeconds: Joi.number().required().trim(),
            trackNumber: Joi.number().required().trim(),
            featuredArtists: Joi.string().required().trim(),
            composer: Joi.string().required().trim(),
            lyricist: Joi.string().required().trim(),
            language: Joi.string().required().trim(),
            playCount: Joi.string().required().trim(),
            rating :Joi.number().required().trim()
        }
    )
}

/** get book list */
const getMusicList = {
    query : Joi.object().keys({
        search : Joi.string().required().trim(),
        sortBy : Joi.string().required().trim(),
        limit : Joi.string().required().trim(),
        page : Joi.string().required().trim()
    }),
};

module.exports = {
    createMusic,
    getMusicList
}