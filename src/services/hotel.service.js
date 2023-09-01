const { Hotel } = require("../models");

/**Create record */
const createHotel = async (reqBody) => {
    return Hotel.create(reqBody);
}

/**Get list */
const getHotelList = async (req, res) => {
    return Hotel.find({ $or: [{ is_active: true }] });
};

/**Delete record */
const deleteHotel = async (hotelId) => {
    return Hotel.findByIdAndDelete(hotelId);
};

/**Find by id */
const getHotelById = async (hotelId) => {
    return Hotel.findById(hotelId);
};

/**Update record */
const updateHotel = async (hotelId, updateBody) => {
    return Hotel.findByIdAndUpdate(hotelId, { $set: updateBody });
}

module.exports = {
    createHotel,
    getHotelList,
    deleteHotel,
    getHotelById,
    updateHotel
}