const { Stationary } = require("../models");

/**Create record */
const createStationary = async (reqBody) => {
    return Stationary.create(reqBody);
}

/**Get list */
const getStationaryList = async (req, res) => {
    return Stationary.find({ $or: [{ is_active: true }] });
}

/**DElete record */
const deleteRecord = async (stationaryId) => {
    return Stationary.findByIdAndDelete(stationaryId);
}

/**Find by id */
const stationaryById = async (stationaryId) => {
    return Stationary.findById(stationaryId);
}

/**Update record */
const updateStationary = async (stationaryId, updateRecord) => {
    return Stationary.findByIdAndUpdate(stationaryId, { $set: updateRecord });
}

module.exports = {
    createStationary,
    getStationaryList,
    deleteRecord,
    stationaryById,
    updateStationary
}