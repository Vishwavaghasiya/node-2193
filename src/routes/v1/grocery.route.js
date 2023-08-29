const express = require('express');
const { groceryController } = require("../../controllers");
const { groceryValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** Create Grocery */
router.post(
    '/grocery-data',
    validate(groceryValidation.createGrocery),
    groceryController.createGrocery
);

/** Get Grocery List */
router.get(
    '/grocery-list',
    groceryController.getGroceryList
);

/** Get grocery details by id */
router.get(
    "/grocery-details/:groceryId",
    groceryController.getGroceryDetails
)

/** Update record */
router.put(
    "/grocery-update/:groceryId",
    groceryController.updateGrocery
)

/** Delete Grocery */
router.delete(
    '/delete-grocery/:groceryId',
    groceryController.deleteGrocery
);

module.exports = router