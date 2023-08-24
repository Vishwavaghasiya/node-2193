const express = require('express');
const { pharmacyController } = require('../../controllers');

const router = express.Router();

router.post(
    "/pharmacy-data",
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