const Joi = require('joi');

const getBook = {
    body: Joi.object().keys(
        {
            book_name: Joi.string().required().trim(),
            auther_name: Joi.string().required().trim(),
            language: Joi.string().required().trim(),
            review : Joi.string().required().trim(),
            price: Joi.string().required().trim(),
            publisher : Joi.string().required().trim()
        }
    )
}

/** get book list */
const getBookList = {
    query : Joi.object().keys({
        search : Joi.string().required().trim(),
        sortBy : Joi.string().required().trim(),
        limit : Joi.string().required().trim(),
        page : Joi.string().required().trim()
    }),
};

module.exports = {
    getBook,
    getBookList
}