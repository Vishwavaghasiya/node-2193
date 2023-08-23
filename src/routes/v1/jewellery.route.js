const express = require('express');
const { jewelleryController } = require('../../controllers');

const router = express.Router();

router.post(
    "/jewellery-data",
    jewelleryController.createJewellery
);

router.get(
    "/jewellery-list",
    jewelleryController.getJewelleryList
);

router.delete(
    "/delete-jewellery/:jewelleryId",
    jewelleryController.deleteRecord
)

module.exports = router