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
            throw new Error("OPS !! Mobile not found !");
        }

        await mobileService.deleteRecord(mobileId);

        res.status(200).json({ success: true, message: "Your mobile record delete successfullYyy !!" });
    } catch (error) {
        re.status(400).json({ success : false , message : error.message});
    }
}

module.exports = {
    createMobile,
    getMobileList,
    deleteRecord
}