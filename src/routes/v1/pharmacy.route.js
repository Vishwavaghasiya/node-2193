const express = require('express');
const { pharmacyController } = require('../../controllers');
const { pharmacyValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

router.post(
    "/pharmacy-data",
    validate(pharmacyValidation.createPharmacy),
    pharmacyController.createPharmacy
);

router.get(
    "/pharmacy-list",
    pharmacyController.getPharmacyList
);

router.delete(
    "/delete-pharmacy/:pharmacyId",
    pharmacyController.deleteRecord
);

module.exports = router;