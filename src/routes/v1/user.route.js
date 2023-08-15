const express = require("express");
// const userValidation = require("../../validation").userValidation;
const userController = require("../../controllers").userController;

const router = express.Router();

/** create user */
// using post method
router.post(
    "/create-user",
    // validate(userValidation.createUser),
    userController.createUser
);

/** get user list */
// using get method
// router.get(
//     "/list",
//     validate(userValidation.getUserList),
//     userController.getUserList
// );

module.exports = router;