const express = require('express');
const { musicController } = require('../../controllers');
const { musicValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

/**Create record */
router.post(
    "/music-data",
    validate(musicValidation.createMusic),
    musicController.createMusic
);

/**Get list */
router.get(
    "/music-list",
    musicController.getMusicList
);

/** Get music details by id */
router.get(
    "/music-details/:musicId",
    musicController.getMusicDetails
)

/**update music */
router.put(
    "/music-update/:musicId",
    musicController.updateMusic
)

/**Delete record */
router.delete(
    "/delete-music/:musicId",
    musicController.deleteRecord
);

module.exports = router;