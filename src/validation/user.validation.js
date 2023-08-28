const Joi = require('joi');

/** create user */
const createUser = {
    body : Joi.object().keys({
        first_name : Joi.string().required().trim(),
        last_name : Joi.string().required().trim(),
        email : Joi.string().required().trim(),
        address : Joi.string().required().trim()
    }),
};

/** get user */
const getUserList = {
    query : Joi.object().keys({
        search : Joi.string().required().trim(),
        sortBy : Joi.string().required().trim(),
        limit : Joi.string().required().trim(),
        page : Joi.string().required().trim()
    }),
};

module.exports = {
    createUser,
    getUserList
}