const express = require('express');
const { mobileController } = require('../../controllers');
const { mobileValidation } = require('../../validation');
const validate = require('../../middlewares/validate');

const router = express.Router();

/**create record */
router.post(
    "/mobile-data",
    validate(mobileValidation.createMobile),
    mobileController.createMobile
);

/**Get list */
router.get(
    "/mobile-list",
    mobileController.getMobileList
);

/** Get mobile details by id */
router.get(
    "/mobile-details/:mobileId",
    mobileController.getMobileDetails
)

/** Update record */
router.put(
    "/mobile-update/:mobileId",
    mobileController.updateMobile
)

/**delete record */
router.delete(
    "/delete-record/:mobileId",
    mobileController.deleteRecord
)

module.exports = router;