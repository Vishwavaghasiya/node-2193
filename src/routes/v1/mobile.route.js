const express = require('express');
const { mobileController } = require('../../controllers');
const { mobileValidation } = require('../../validation');
const validate = require('../../middlewares/validate');

const router = express.Router();

router.post(
    "/mobile-data",
    validate(mobileValidation.createMobile),
    mobileController.createMobile
);

router.get(
    "/mobile-list",
    // validate(mobileValidation.getMobileList),
    mobileController.getMobileList
);

router.delete(
    "/delete-record/:mobileId",
    mobileController.deleteRecord
)

module.exports = router;