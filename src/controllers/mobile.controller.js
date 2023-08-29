const { mobileService } = require('../services');

/** create mobile record */
const createMobile = async (req, res) => {
    try {
        const reqBody = req.body;

        const mobile = await mobileService.createMobile(reqBody);
        if (!mobile) {
            throw new Error("Something wents wrong please try again or later !!");
        }

        res.status(200).json({
            success: true,
            message: "Your mobile record create successfullYyy !!",
            data: { mobile }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/** get mobile list */
const getMobileList = async (req, res) => {
    try {
        const getList = await mobileService.getMobileList();

        res.status(200).json({
            success: true,
            message: "Your mobile list create successfullYyy !!",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/** delete record */
const deleteRecord = async (req, res) => {
    try {
        const mobileId = req.params.mobileId;

        const mobileExist = await mobileService.getMobileList(mobileId);
        if (!mobileExist) {
            throw new Error("Mobile not found");
        }

        await mobileService.deleteRecord(mobileId);

        res.status(200).json({
            success: true,
            message: "your mobile record delete successfully !!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/**Get mobile by Id */
const getMobileDetails = async (req, res) => {
    try {
        const getDetails = await mobileService.mobileById(req.params.mobileId);
        if (!getDetails) {
            throw new Error("Mobile not Found !!");
        }

        res.status(200).json({
            success: true,
            message: "You wonna get mobile details successfullYyyy !!",
            data: { getDetails }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/**Update record */
const updateMobile = async (req, res) => {
    try {
        const mobileId = req.params.mobileId;

        const mobileEx = await mobileService.mobileById(mobileId);
        if (!mobileEx) {
            throw new Error("Mobile not found !!");
        }

        await mobileService.updateMobile(mobileId, req.body);

        res.status(200).json({
            success: true,
            message: "Your mobile details update successfullYyy !!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

module.exports = {
    createMobile,
    getMobileList,
    deleteRecord,
    getMobileDetails,
    updateMobile
};