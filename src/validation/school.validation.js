const Joi = require('joi');

const createSchool = {
    body: Joi.object().keys(
        {
            schoolName: Joi.string().required().trim(),
            address: Joi.string().required().trim(),
            principal: Joi.string().required().trim(),
            students: Joi.string().required().trim(),
            teachers: Joi.string().required().trim(),
            grade: Joi.string().required().trim(),
            subjects: Joi.string().required().trim()
        }
    )
}

/** get book list */
const getSchoolList = {
    query: Joi.object().keys({
        search: Joi.string().required().trim(),
        sortBy: Joi.string().required().trim(),
        limit: Joi.string().required().trim(),
        page: Joi.string().required().trim()
    }),
};

module.exports = {
    createSchool,
    getSchoolList
}