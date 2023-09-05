const Joi = require('joi');

/** create jewellery list */
const createJewellery = {
    body: Joi.object().keys(
        {
            shopName: Joi.string().required().trim(),
            itemCode: Joi.string().required().trim(),
            itemName: Joi.string().required().trim(),
            category: Joi.string().required().trim(),
            material: Joi.string().required().trim(),
            price: Joi.number().integer().allow(),
            availableStock: Joi.string().required().trim(),
            designer: Joi.string().required().trim(),
            user: Joi.string().required().trim(),
        }
    ),
};

/** get jewellery list */
const getJewelleryList = {
    query: Joi.object().keys(
        {
            search: Joi.string().required().trim(),
            sortBy: Joi.string().required().trim(),
            limit: Joi.string().required().trim(),
            page: Joi.string().required().trim()
        }
    ),
};

module.exports = {
    createJewellery,
    getJewelleryList
}