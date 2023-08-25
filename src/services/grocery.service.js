const { Grocery } = require('../models');

const createGrocery = async (reqBody) => {
    return Grocery.create(reqBody);
};

const getGroceryList = async (req , res) => {
    return Grocery.find({ $or : [{ is_active : false}]});
};

const deleteGrocery = async (groceryId) => {
    return Grocery.findByIdAndDelete(groceryId);
};

const getGroceryById = async (groceryId) => {
    return Grocery.findById(groceryId);
};

module.exports = {
    createGrocery,
    getGroceryList,
    deleteGrocery,
    getGroceryById
}