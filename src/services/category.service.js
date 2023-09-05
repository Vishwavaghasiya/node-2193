const { Category } = require('../models');

/**Create record */
const createCategory = async (reqBody) => {
    return Category.create(reqBody);
}

/**Get list */
const getCategoryList = async (req, res) => {
    return Category.find();
}

/**Delete record */
const deleteRecord = async (categoryId) => {
    return Category.findByIdAndDelete(categoryId);
}

/**Find by id */
const categoryById = async (categoryId) => {
    return Category.findById(categoryId);
}

/**Update record */
const updateCategory = async (categoryId, updateBody) => {
    return Category.findByIdAndUpdate(categoryId, { $set: updateBody });
}

module.exports = {
    createCategory,
    getCategoryList,
    deleteRecord,
    categoryById,
    updateCategory
}