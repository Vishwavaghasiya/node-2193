const express = require('express');
const { pharmacyController } = require('../../controllers');
const { pharmacyValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

/**Create record */
router.post(
    "/pharmacy-data",
    validate(pharmacyValidation.createPharmacy),
    pharmacyController.createPharmacy
);

/**Get list */
router.get(
    "/pharmacy-list",
    pharmacyController.getPharmacyList
);

/** Get pharmacy by id */
router.get(
    "/pharmacy-details/:pharmacyId",
    pharmacyController.getPharmacyDetails
);

/** Update record */
router.put(
    "/pharmacy-update/:pharmacyId",
    pharmacyController.updatePharmacy
);

/**Delete record */
router.delete(
    "/delete-pharmacy/:pharmacyId",
    pharmacyController.deleteRecord
);

module.exports = router;