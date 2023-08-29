const { Mobile } = require('../models');

const createMobile = async (reqBody) => {
    return Mobile.create(reqBody);
}

const getMobileList = async (req, res) => {
    return Mobile.find();
}

const deleteRecord = async (mobileId) => {
    return Mobile.findByIdAndDelete(mobileId);
}

const mobileById = async (mobileId) => {
    return Mobile.findById(mobileId);
}

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