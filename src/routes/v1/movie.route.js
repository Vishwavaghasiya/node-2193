const express = require('express');
const { movieController } = require('../../controllers');
const { movieValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

router.post(
    "/movie-data",
    validate(movieValidation.createMovie),
    movieController.createMovie
);

router.get(
    "/movie-list",
    movieController.getMovieList
);

router.delete(
    "/delete-movie/:movieId",
    movieController.deleteRecord
);

module.exports = router;