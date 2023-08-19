const express = require("express");
const userRoute = require("./user.route");
const bookRoute = require("./book.route");

const router = express.Router();

router.use("/user", userRoute);
router.use("/book", bookRoute);

module.exports = router;