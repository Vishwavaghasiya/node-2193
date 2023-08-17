const express = require("express");
const userController = require("../../controllers").userController;
// const userValidation = require("../../validation").userValidation;
// const userValidation = require('../../middlewares/validate')

const router = express.Router();

/** create user */
router.post(
    "/create-user",
    // validate(userValidation.createUser),
    userController.createUser
);

module.exports = router;