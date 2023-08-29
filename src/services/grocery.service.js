const { Grocery } = require('../models');

const createGrocery = async (reqBody) => {
    return Grocery.create(reqBody);
};

const getGroceryList = async (req , res) => {
    return Grocery.find({ $or : [{ is_active : true}]});
};

const deleteGrocery = async (groceryId) => {
    return Grocery.findByIdAndDelete(groceryId);
};

const getGroceryById = async (groceryId) => {
    return Grocery.findById(groceryId);
};

const updateGrocery = async (groceryId, updateBody) => {
    return Grocery.findByIdAndUpdate(groceryId, { $set: updateBody });
}

module.exports = {
    createGrocery,
    getGroceryList,
    deleteGrocery,
    getGroceryById,
    updateGrocery
}