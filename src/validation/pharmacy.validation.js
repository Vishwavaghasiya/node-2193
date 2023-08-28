const Joi = require('joi');

const createPharmacy = {
    body: Joi.object().keys(
        {
            pharmacyName: Joi.string().required().trim(),
            address: Joi.string().required().trim(),
            pharmacist: Joi.string().required().trim(),
            inventory: Joi.string().required().trim(),
            prescription: Joi.string().required().trim(),
            medications: Joi.string().required().trim()
        }
    )
}

/** get book list */
const getPharmacyList = {
    query : Joi.object().keys({
        search : Joi.string().required().trim(),
        sortBy : Joi.string().required().trim(),
        limit : Joi.string().required().trim(),
        page : Joi.string().required().trim()
    }),
};

module.exports = {
    createPharmacy,
    getPharmacyList
}