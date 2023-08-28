const { Bus } = require('../models');

const createBus = async (reqBody) => {
    return Bus.create(reqBody);
};

const getBusList = async (req, res) => {
    return Bus.find({$or:[{is_active:true}]});
};

const deleteBus = async (busId) => {
    return Bus.findByIdAndDelete(busId);
};

const getBusById = async (busId) => {
    return Bus.findById(busId);
};

module.exports = {
    createBus,
    getBusList,
    deleteBus,
    getBusById
}