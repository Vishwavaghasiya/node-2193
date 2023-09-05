const Joi = require('joi');

/** create bus */
const createBuss = {
    body : Joi.object().keys({
        busName : Joi.string().required().trim(),
        busNumber : Joi.string().required().trim(),
        driverName : Joi.string().required().trim(),
        departureTime : Joi.string().required().trim(),
        arrivalTime : Joi.string().required().trim(),
        travel : Joi.string().required().trim(),
        user : Joi.string().required().trim(),
    }),
};

/** get bus list */
const getBusList = {
    query : Joi.object().keys({
        search : Joi.string().required().trim(),
        sortBy : Joi.string().required().trim(),
        limit : Joi.string().required().trim(),
        page : Joi.string().required().trim()
    }),
};

module.exports = {
    createBuss,
    getBusList
}