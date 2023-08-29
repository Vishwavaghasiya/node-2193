const { groceryService } = require('../services');

/** create grocery */
const createGrocery = async (req, res) => {
    try {
        const reqBody = req.body;

        const grocery = await groceryService.createGrocery(reqBody);
        if (!grocery) {
            throw new Error('Something wents wrong , please try again or later !!');
        }

        res.status(200).json(
            {
                success: true,
                message: 'Grocery module create successfully !',
                data: { grocery },
            }
        );

    } catch (error) {
        res.status(400).json({ success: true, message: error.message });
    }
};

/** get grocery list */
const getGroceryList = async (req, res) => {
    try {
        const getList = await groceryService.getGroceryList(req, res);

        res.status(200).json({
            success: true,
            message: "Get grocery list successfully !",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/**Get grocery by Id */
const getGroceryDetails = async (req, res) => {
    try {
        const getDetails = await groceryService.groceryById(req.params.groceryId);
        if (!getDetails) {
            throw new Error("grocery not Found !!");
        }

        res.status(200).json({
            success: true,
            message: "You wonna get grocery details successfullYyyy !!",
            data: { getDetails }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/**Update record */
const updateGrocery = async (req, res) => {
    try {
        const groceryId = req.params.groceryId;

        const groceryEx = await groceryService.getGroceryById(groceryId);
        if (!groceryEx) {
            throw new Error("grocery not found !!");
        }

        await groceryService.updateGrocery(groceryId, req.body);

        res.status(200).json({
            success: true,
            message: "Your grocery details update successfullYyy !!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/** Delete grocery */
const deleteGrocery = async (req, res) => {
    try {
        const groceryId = req.params.groceryId;
        const groceryExists = await groceryService.getGroceryList(groceryId);
        if (!groceryExists) {
            throw new Error("grocery not found !!");
        }

        await groceryService.deleteGrocery(groceryId);

        res.status(200).json({
            success: true,
            message: "Grocery delete successfully !!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createGrocery,
    getGroceryList,
    getGroceryDetails,
    updateGrocery,
    deleteGrocery
}