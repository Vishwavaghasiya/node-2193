const express = require('express');
const { schoolController } = require('../../controllers');
const { schoolValidation } = require('../../validation');
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

router.delete(
    "/delete-school/:schoolId",
    schoolController.deleteRecord
);

module.exports = router;