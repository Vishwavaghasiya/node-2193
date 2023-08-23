const express = require('express');
const { movieController } = require('../../controllers');

const router = express.Router();

router.post(
    "/movie-data",
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