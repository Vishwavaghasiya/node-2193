const express = require('express');
const { hotelController } = require('../../controllers');

const router = express.Router();

router.post(
    "/hotel-data",
    hotelController.createHotel
);

router.get(
    "/hotel-list",
    hotelController.getHotelList
);

router.delete(
    "/delete-hotel/:hotelId",
    hotelController.deleteRecord
);

module.exports = router;