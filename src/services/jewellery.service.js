const { Jewellery } = require('../models');

/**Create record */
const createJewellery = async (reqBody) => {
    return Jewellery.create(reqBody);
};

/**Get list */
const getJewelleryList = async (req, res) => {
    return Jewellery.find({ $or: [{ is_active: true }] });
};

/**Delete record */
const deleteJewellery = async (jewelleryId) => {
    return Jewellery.findByIdAndDelete(jewelleryId);
};

/**Find by id */
const getJewelleryById = async (jewelleryId) => {
    return Jewellery.findById(jewelleryId);
};

/**Update record */
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