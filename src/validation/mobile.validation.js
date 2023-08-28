const Joi = require('joi');

/**create mobile validation */
const createMobile = {
    body: Joi.object().keys(
        {
            shopName: Joi.string().required().trim(),
            brand: Joi.string().required().trim(),
            model: Joi.string().required().trim(),
            color: Joi.string().required().trim(),
            operatingSystem: Joi.string().required().trim(),
            storageCapacity: Joi.string().required().trim(),
            displayTechnology: Joi.string().required().trim(),
            camera: Joi.string().trim(),
            batteryCapacity: Joi.string().trim(),
            connectivity: Joi.string().trim(),
            SIMCard: Joi.string().required().trim(),
            price: Joi.number().integer().allow(),
            rating: Joi.string().required().trim(),
        }
    )
};

/** get mobile list */
const getMobileList = {
    query: Joi.object().keys({
        search: Joi.string().required().trim(),
        sortBy: Joi.string().required().trim(),
        limit: Joi.string().required().trim(),
        page: Joi.string().required().trim()
    }),
};

module.exports = {
    createMobile,
    getMobileList
}