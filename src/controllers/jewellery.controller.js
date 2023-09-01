const { jewelleryService } = require('../services');

/** create jewellery module */
const createJewellery = async (req, res) => {
    try {
        const reqBody = req.body;

        const jewellery = await jewelleryService.createJewellery(reqBody);
        if (!jewellery) {
            throw new Error("Something wents wrong , please try again or later !!!");
        }

        res.status(200).json(
            {
                success: true,
                message: "Jewellery module create Successfully !!",
                data: { jewellery }
            }
        );

    } catch (error) {
        res.status(400).json({
            success: false, message: error.message
        })
    }
};

/** list of jewellery data */
const getJewelleryList = async (req, res) => {
    try {
        const getList = await jewelleryService.getJewelleryList(req, res);
        res.status(200).json(
            {
                success: true,
                message: "Get Jewellery List SuccessfullYyyy !",
                data: { getList }
            }
        );
    } catch (error) {
        res.status(400).json({
            success: false, message: error.message
        });
    }
};

/**Get jewellery by Id */
const getJewelleryDetails = async (req, res) => {
    try {
        const getDetails = await jewelleryService.getJewelleryById(req.params.jewelleryId);
        if (!getDetails) {
            throw new Error("jewellery not Found !!");
        }

        res.status(200).json({
            success: true,
            message: "You wonna get jewellery details successfullYyyy !!",
            data: { getDetails }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/**Update record */
const updateJewellery = async (req, res) => {
    try {
        const jewelleryId = req.params.jewelleryId;

        const jewelleryEx = await jewelleryService.getJewelleryById(jewelleryId);
        if (!jewelleryEx) {
            throw new Error("jewellery not found !!");
        }

        await jewelleryService.updateJewellery(jewelleryId, req.body);

        res.status(200).json({
            success: true,
            message: "Your jewellery details update successfullYyy !!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/** Delete jewellery data by ID */
const deleteRecord = async (req, res) => {
    try {
        const jewelleryId = req.params.jewelleryId;
        const jewelleryExists = await jewelleryService.getJewelleryList(jewelleryId);
        if (!jewelleryExists) {
            throw new Error("Jewellery not found !");
        }

        await jewelleryService.deleteJewellery(jewelleryId);

        res.status(200).json(
            {
                success: true,
                message: "Jewellery delete successfullYyy !!"
            }
        )
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

module.exports = {
    createJewellery,
    getJewelleryList,
    getJewelleryDetails,
    updateJewellery,
    deleteRecord
}