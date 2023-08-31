const { Jewellery } = require('../models');

const createJewellery = async (reqBody) => {
    return Jewellery.create(reqBody);
};

const getJewelleryList = async (req, res) => {
    return Jewellery.find({ $or: [{ is_active: true }] });
};

const deleteJewellery = async (jewelleryId) => {
    return Jewellery.findByIdAndDelete(jewelleryId);
};

const getJewelleryById = async (jewelleryId) => {
    return Jewellery.findById(jewelleryId);
};

const updateJewellery = async (jewelleryId, updateBody) => {
    return Jewellery.findByIdAndUpdate(jewelleryId, { $set: updateBody });
}

module.exports = {
    createJewellery,
    getJewelleryList,
    deleteJewellery,
    getJewelleryById,
    updateJewellery
}