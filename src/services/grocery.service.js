const { Grocery } = require('../models');

/**Create record */
const createGrocery = async (reqBody) => {
    return Grocery.create(reqBody);
};

/**Get list */
const getGroceryList = async (req , res) => {
    return Grocery.find({ $or : [{ is_active : true}]});
};

/**Delete record */
const deleteGrocery = async (groceryId) => {
    return Grocery.findByIdAndDelete(groceryId);
};

/**Find by id */
const getGroceryById = async (groceryId) => {
    return Grocery.findById(groceryId);
};

/**Update record */
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