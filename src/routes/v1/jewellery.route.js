const express = require('express');
const { jewelleryController } = require('../../controllers');
const { jewelleryValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

router.post(
    "/jewellery-data",
    validate(jewelleryValidation.getJewelleryList),
    jewelleryController.createJewellery
);

router.get(
    "/jewellery-list",
    jewelleryController.getJewelleryList
);

/** Get jewellery details by id */
router.get(
    "/jewellery-details/:jewelleryId",
    jewelleryController.getJewelleryDetails
)

/**update jewellery */
router.put(
    "/jewellery-update/:jewelleryId",
    jewelleryController.updateJewellery
)

router.delete(
    "/delete-jewellery/:jewelleryId",
    jewelleryController.deleteRecord
)

module.exports = router;