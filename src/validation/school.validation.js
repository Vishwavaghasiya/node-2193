const Joi = require('joi');

const createSchool = {
    body: Joi.object().keys(
        {
            // schoolName: Joi.string().required().trim(),
            // address: Joi.string().required().trim(),
            // principal: Joi.string().required().trim(),
            students: Joi.array().items(
                Joi.object({
                    age: Joi.number().required(),
                    grade: Joi.string().required().trim()
                })
            ),
            teachers:Joi.array().items(
                Joi.object({
                    subjects: Joi.array().items(Joi.string().required().trim()).required()
                })
            )
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