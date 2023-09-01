const express = require('express');
const { stationaryController } = require('../../controllers');
const { stationaryValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create record */
router.post(
    "/stationary-data",
    validate(stationaryValidation.createStationary),
    stationaryController.createStationary
);

/** Get list */
router.get(
    "/stationary-list",
    stationaryController.getStationaryList
);

/**Get stationary record by id */
router.get(
    "/stationary-details/:stationaryId",
    stationaryController.getStationaryDetails
);

/**Update one record */
router.put(
    "/stationary-update/:stationaryId",
    stationaryController.updateStationary
);

/** delete record */
router.delete(
    "/delete-stationary/:stationaryId",
    stationaryController.deleteRecord
);

module.exports = router;