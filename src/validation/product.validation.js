const Joi = require('joi');

/** create category */
const createCategory = {
    body: Joi.object().keys({
        product_type: Joi.string().required().trim(),
        product_name: Joi.string().required().trim(),
        price: Joi.number().integer().allow(),
        category: Joi.string().required().trim()
    }),
};

module.exports = {
    createCategory
}