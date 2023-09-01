const { Travel } = require("../models");

/**Create record */
const createTravel = async (reqBody) => {
    return Travel.create(reqBody);
}

/**Get list */
const getTravelList = async (req, res) => {
    return Travel.find({ $or: [{ is_active: true }] });
}

/**Delete record */
const deleteRecord = async (travelId) => {
    return Travel.findByIdAndDelete(travelId);
}

/** get record by id */
const travelByID = async (travelId) => {
    return Travel.findById(travelId);
}

/**update record */
const updateTravel = async (travelId, updateRecord) => {
    return Travel.findByIdAndUpdate(travelId, { $set: updateRecord });
}

module.exports = {
    createTravel,
    getTravelList,
    updateTravel,
    deleteRecord,
    travelByID
}