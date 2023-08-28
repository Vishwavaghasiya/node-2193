const express = require("express");
const { busValidation } = require("../../validation");
const { busController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create bus */
router.post(
    "/bus-data",
    validate(busValidation.getBus),
    busController.createBus
);

/** get bus list */
router.get(
    "/bus-list",
    busController.getBusList
);

/** Delete bus */
router.delete(
    "/delete-bus/:busId",
    busController.deleteBus
);

module.exports = router;