const express = require('express');
const { bookController } = require('../../controllers');

const router = express.Router();

/** get book details */
router.post(
    "/book-data",
    bookController.getBook
);

module.exports = router;