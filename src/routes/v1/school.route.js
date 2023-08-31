const express = require('express');
const { schoolController } = require('../../controllers');
const { schoolValidation } = require("../../validation");
const validate = require("../../middlewares/validate");

const router = express.Router();

router.post(
    "/school-data",
    validate(schoolValidation.createSchool),
    schoolController.createSchool
);

router.get(
    "/school-list",
    schoolController.getSchoolList
);

/** Get School by id */
router.get(
    "/shool-details/:schoolId",
    schoolController.getSchoolDetails
);

/** Update record */
router.put(
    "/school-update/:schoolId",
    schoolController.updateSchool
)

router.delete(
    "/delete-school/:schoolId",
    schoolController.deleteRecord
);

module.exports = router;