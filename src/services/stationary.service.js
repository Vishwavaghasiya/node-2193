const { Stationary } = require("../models");

const createStationary = async (reqBody) => {
    return Stationary.create(reqBody);
}

const getStationaryList = async (req, res) => {
    return Stationary.find({ $or: [{ is_active: false }] });
}

const deleteRecord = async (stationaryId) => {
    return Stationary.findByIdAndDelete(stationaryId);
}

const stationaryById = async (stationaryId) => {
    return Stationary.findById(stationaryId);
}

module.exports = {
    createStationary,
    getStationaryList,
    deleteRecord,
    stationaryById
}