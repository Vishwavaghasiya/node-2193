const express = require("express");

const busRoute = require('./bus.route');
const userRoute = require("./user.route");
const bookRoute = require("./book.route");
const hotelRoute = require("./hotel.route");
const groceryRoute = require("./grocery.route");

const router = express.Router();

router.use("/bus" , busRoute);
router.use("/user", userRoute);
router.use("/book", bookRoute);
router.use("/hotel", hotelRoute);
router.use("/grocery", groceryRoute);

module.exports = router;