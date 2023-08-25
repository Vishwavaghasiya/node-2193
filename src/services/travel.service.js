const { Travel } = require("../models");

const createTravel = async (reqBody) => {
    return Travel.create(reqBody);
}

const getTravelList = async (req, res) => {
    return Travel.find({ $or: [{ is_active: false }] });
}

const deleteRecord = async (travelId) => {
    return Travel.findByIdAndDelete(travelId);
}

const travelByID = async (travelId) => {
    return Travel.findById(travelId);
}

module.exports = {
    createTravel,
    getTravelList,
    deleteRecord,
    travelByID
}