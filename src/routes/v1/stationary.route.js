const express = require('express');
const { stationaryController } = require('../../controllers');
const { stationaryValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

router.post(
    "/stationary-data",
    validate(stationaryValidation.createStationary),
    stationaryController.createStationary
);

router.get(
    "/stationary-list",
    stationaryController.getStationaryList
);

router.delete(
    "/delete-stationary/:stationaryId",
    stationaryController.deleteRecord
);

module.exports = router;