const Joi = require('joi');

const createStationary = {
    body: Joi.object().keys(
        {
            stationaryName: Joi.string().required().trim(),
            itemCode: Joi.string().required().trim(),
            itemName: Joi.string().required().trim(),
            category: Joi.string().required().trim(),
            price: Joi.number().required().trim(),
            stockQuantity: Joi.string().required().trim(),
            manufacturer: Joi.string().required().trim(),
            color: Joi.string().required().trim()
        }
    )
}

/** get book list */
const getStationaryList = {
    query : Joi.object().keys({
        search : Joi.string().required().trim(),
        sortBy : Joi.string().required().trim(),
        limit : Joi.string().required().trim(),
        page : Joi.string().required().trim()
    }),
};

module.exports = {
    createStationary,
    getStationaryList
}