const express = require("express");
const { userValidation } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create user */
// using post method
router.post(
    "/create-user",
    validate(userValidation.createUser),
    userController.createUser
  );
/** get user list */
// using get method
router.get(
    "/list",
    validate(userValidation.getUserList),
    userController.getUserList
);

/** get user details by id */
// using get method
// router.get(
//     "/get-details/:userId",
//     validate(userValidation.getDetails),
//     userController.getDetails
// );

module.exports = router;