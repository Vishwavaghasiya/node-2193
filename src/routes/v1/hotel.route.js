const express = require('express');
const { hotelController } = require('../../controllers');
const { hotelValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

/**create hotel */
router.post(
    "/hotel-data",
    validate(hotelValidation.getHotel),
    hotelController.createHotel
);

/** get list */
router.get(
    "/hotel-list",
    hotelController.getHotelList
);

/** Get hotel details by id */
router.get(
    "/hotel-details/:hotelId",
    hotelController.getHotelDetails
)

/**update record */
router.put(
    "/hotel-update/:hotelId",
    hotelController.updateHotel
)

/**delete record */
router.delete(
    "/delete-hotel/:hotelId",
    hotelController.deleteRecord
);

module.exports = router;