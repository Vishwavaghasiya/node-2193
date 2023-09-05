const Joi = require('joi');

/** create grocery */
const createGrocery = {
    body: Joi.object().keys({
        itemName: Joi.string().required().trim(),
        category: Joi.string().required().trim(),
        brand: Joi.string().required().trim(),
        quantity: Joi.string().required().trim(),
        expirationDate: Joi.string().required().trim(),
        notes: Joi.string().required().trim(),
        inStock: Joi.string().required().trim(),
        supplier: Joi.string().required().trim(),
        category: Joi.string().required().trim()
    }),
};

/** get grocery list */
const getGroceryList = {
    query: Joi.object().keys({
        search: Joi.string().required().trim(),
        sortBy: Joi.string().required().trim(),
        limit: Joi.string().required().trim(),
        page: Joi.string().required().trim()
    }),
};

module.exports = {
    createGrocery,
    getGroceryList
}