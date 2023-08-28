const express = require('express');
const { bookValidation } = require("../../validation");
const { bookController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create book */
router.post(
    "/book-data",
    validate(bookValidation.getBook),
    bookController.createBook
);

/** get book list */
router.get(
    "/book-list",
    bookController.getBookList
);

/** Delete book */
router.delete(
    "/delete-book/:bookId",
    bookController.deleteRecord
);

module.exports = router;