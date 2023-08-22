const express = require('express');
const { bookController } = require('../../controllers');

const router = express.Router();

/** create book */
router.post(
    "/book-data",
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