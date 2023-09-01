const express = require('express');
const { travelController } = require('../../controllers');
const { travelValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

/**Create record */
router.post(
    "/travel-data",
    validate(travelValidation.createTravel),
    travelController.createTravel
);

/**Get list */
router.get(
    "/travel-list",
    travelController.getTravelList
);

/**Get list by id */
router.get(
    "/travel-details/:travelId",
    travelController.getTravelDetails
);

/**update record */
router.put(
    "/travel-update/:travelId",
    travelController.updateTravel
);

/**Delete record */
router.delete(
    "/delete-travel/:travelId",
    travelController.deleteRecord
);

module.exports = router;