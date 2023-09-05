const express = require('express');
const { categoryValidation } = require("../../validation");
const { categoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create category */
router.post(
    "/category-data",
    validate(categoryValidation.createCategory),
    categoryController.createCategory
);

/** get category list */
router.get(
    "/category-list",
    categoryController.getCategoryList
);

/** Get category details by id */
router.get(
    "/category-details/:categoryId",
    categoryController.getCategoryDetails
)

/** Update record */
router.put(
    "/category-update/:categoryId",
    categoryController.updateCategory
)

/** Delete category */
router.delete(
    "/delete-category/:categoryId",
    categoryController.deleteRecord
);

module.exports = router;