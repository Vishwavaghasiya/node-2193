const express = require('express');
const { jewelleryController } = require('../../controllers');
const { jewelleryValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create record */
router.post(
    "/jewellery-data",
    validate(jewelleryValidation.createJewellery),
    jewelleryController.createJewellery
);

/**get list */
router.get(
    "/jewellery-list",
    jewelleryController.getJewelleryList
);

/** Get details by id */
router.get(
    "/jewellery-details/:jewelleryId",
    jewelleryController.getJewelleryDetails
)

/**update */
router.put(
    "/jewellery-update/:jewelleryId",
    jewelleryController.updateJewellery
)

/**delete record */
router.delete(
    "/delete-jewellery/:jewelleryId",
    jewelleryController.deleteRecord
)

module.exports = router;