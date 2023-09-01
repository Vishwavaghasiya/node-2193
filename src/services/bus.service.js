const { Bus } = require('../models');

/**Create record */
const createBus = async (reqBody) => {
    return Bus.create(reqBody);
};

/**Get list */
const getBusList = async (req, res) => {
    return Bus.find({$or:[{is_active:true}]});
};

/**Delete record */
const deleteBus = async (busId) => {
    return Bus.findByIdAndDelete(busId);
};

/**Find by id */
const busById = async (busId) => {
    return Bus.findById(busId);
};

/**Update record */
const updateBus = async (busId, updateBody) => {
    return Bus.findByIdAndUpdate(busId, { $set: updateBody });
}

module.exports = {
    createBus,
    getBusList,
    deleteBus,
    busById,
    updateBus
}