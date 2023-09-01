const { Mobile } = require('../models');

/**Create record */
const createMobile = async (reqBody) => {
    return Mobile.create(reqBody);
}

/**Get list */
const getMobileList = async (req, res) => {
    return Mobile.find();
}

/**Delete record */
const deleteRecord = async (mobileId) => {
    return Mobile.findByIdAndDelete(mobileId);
}

/**Find by id */
const mobileById = async (mobileId) => {
    return Mobile.findById(mobileId);
}

/**Update record */
const updateMobile = async (mobileId, updateBody) => {
    return Mobile.findByIdAndUpdate(mobileId, { $set: updateBody });
}

module.exports = {
    createMobile,
    getMobileList,
    deleteRecord,
    mobileById,
    updateMobile
}