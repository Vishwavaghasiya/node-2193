const express = require("express");
const { busController } = require("../../controllers");
const { busValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create bus */
router.post(
    "/bus-create",
    validate(busValidation.createBuss),
    busController.createBus
);

/** get bus list */
router.get(
    "/bus-list",
    busController.getBusList
);

/** Get bus details by id */
router.get(
    "/bus-details/:busId",
    busController.getBusDetails
)

/** Update record */
router.put(
    "/bus-update/:busId",
    busController.updatebus
)

/** Delete bus */
router.delete(
    "/delete-bus/:busId",
    busController.deleteBus
);

module.exports = router;