const express = require("express");
const { userController } = require("../../controllers");

const router = express.Router();

/** create user */
router.post(
    "/create-user",
    userController.createUser
);

module.exports = router;