const express = require('express');
const { groceryController } = require('../../controllers');

const router = express.Router();

/** Create Grocery */
router.post(
    '/grocery-data',
    groceryController.createGrocery
);

/** Get Grocery List */
router.get(
    '/grocery-list',
    groceryController.getGroceryList
);

/** Delete Grocery */
router.delete(
    '/delete-grocery/:groceryId',
    groceryController.deleteGrocery
);

module.exports = router