const express = require('express');
const { travelController } = require('../../controllers');

const router = express.Router();

router.post(
    "/travel-data",
    travelController.createTravel
);

router.get(
    "/travel-list",
    travelController.getTravelList
);

router.delete(
    "/delete-travel/:travelId",
    travelController.deleteRecord
);

module.exports = router;