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

/** Get book details by id */
router.get(
    "/book-details/:bookId",
    bookController.getBookDetails
)

/** Update record */
router.put(
    "/book-update/:bookId",
    bookController.updateBook
)

/** Delete book */
router.delete(
    "/delete-book/:bookId",
    bookController.deleteRecord
);

module.exports = router;