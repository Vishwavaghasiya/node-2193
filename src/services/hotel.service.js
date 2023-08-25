const { Hotel } = require("../models");

const createHotel = async (reqBody) => {
    return Hotel.create(reqBody);
}

const getHotelList = async (req, res) => {
    return Hotel.find({ $or: [{ is_active: false }] });
};

const deleteHotel = async (hotelId) => {
    return Hotel.findByIdAndDelete(hotelId);
};

const getHotelById = async (hotelId) => {
    return Hotel.findById(hotelId);
};

module.exports = {
    createHotel,
    getHotelList,
    deleteHotel,
    getHotelById
}