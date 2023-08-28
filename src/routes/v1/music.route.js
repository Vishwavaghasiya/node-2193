const express = require('express');
const { musicController } = require('../../controllers');
const { musicValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

router.post(
    "/music-data",
    validate(musicValidation.createMusic),
    musicController.createMusic
);

router.get(
    "/music-list",
    musicController.getMusicList
);

router.delete(
    "/delete-music/:musicId",
    musicController.deleteRecord
);

module.exports = router;