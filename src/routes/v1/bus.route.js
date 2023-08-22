const express = require('express');
const { busController } = require('../../controllers');

const router = express.Router();

/** create bus */
router.post(
    "/bus-data",
    busController.createBus
);

/** get bus list */
router.get(
    "/bus-list",
    busController.getBusList
);

/** Delete bus */
router.delete(
    "/delete-bus/:busId",
    busController.deleteBus
);

module.exports = router;