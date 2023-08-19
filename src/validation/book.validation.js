const Joi = require('joi');

const getBook = {
    body: Joi.object().keys(
        {
            book_name: Joi.string().required().trim(),
            auther_name: Joi.string().required().trim(),
            language: Joi.string().required().trim(),
            price: Joi.string().required().trim(),
            review : Joi.string().required().trim()
        }
    )
}

const exports = {
    getBook
}