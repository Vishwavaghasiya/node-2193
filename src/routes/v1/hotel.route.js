const express = require('express');
const { hotelController } = require('../../controllers');
const { hotelValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

router.post(
    "/hotel-data",
    validate(hotelValidation.getHotel),
    hotelController.createHotel
);

router.get(
    "/hotel-list",
    hotelController.getHotelList
);

/** Get hotel details by id */
router.get(
    "/hotel-details/:hotelId",
    hotelController.getHotelDetails
)

router.put(
    "/hotel-update/:hotelId",
    hotelController.updateHotel
)

router.get(
    "/hotel-details/:hotelId",
    hotelController.getHotelDetails
)

router.put(
    "/hotel-update/:hotelId",
    hotelController.updateHotel
)

router.delete(
    "/delete-hotel/:hotelId",
    hotelController.deleteRecord
);

module.exports = router;