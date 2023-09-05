const { categoryService } = require('../services');

/** create category record */
const createCategory = async (req, res) => {
    try {
        const reqBody = req.body;

        const category = await categoryService.createCategory(reqBody);
        if (!category) {
            throw new Error("Something wents wrong please try again or later !!");
        }

        res.status(200).json({
            success: true,
            message: "Your category record create successfullYyy !!",
            data: { category }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/** get category list */
const getCategoryList = async (req, res) => {
    try {
        const getList = await categoryService.getCategoryList();

        res.status(200).json({
            success: true,
            message: "Your category list create successfullYyy !!",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/** delete record */
const deleteRecord = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;

        const categoryExist = await categoryService.getCategoryList(categoryId);
        if (!categoryExist) {
            throw new Error("category not found");
        }

        await categoryService.deleteRecord(categoryId);

        res.status(200).json({
            success: true,
            message: "your category record delete successfully !!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/**Get category by Id */
const getCategoryDetails = async (req, res) => {
    try {
        const getDetails = await categoryService.categoryById(req.params.categoryId);
        if (!getDetails) {
            throw new Error("category not Found !!");
        }

        res.status(200).json({
            success: true,
            message: "You wonna get category details successfullYyyy !!",
            data: { getDetails }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/**Update record */
const updateCategory = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;

        const categoryEx = await categoryService.categoryById(categoryId);
        if (!categoryEx) {
            throw new Error("category not found !!");
        }

        await categoryService.updateCategory(categoryId, req.body);

        res.status(200).json({
            success: true,
            message: "Your category details update successfullYyy !!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

module.exports = {
    createCategory,
    getCategoryList,
    deleteRecord,
    getCategoryDetails,
    updateCategory
};