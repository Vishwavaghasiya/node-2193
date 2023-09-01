const { stationaryService } = require("../services");

/** create record */
const createStationary = async (req, res) => {
    try {
        const reqBody = req.body;

        const stationary = await stationaryService.createStationary(reqBody);
        if (!stationary) {
            throw new Error("Something wents wrong , please try again or later !!");
        }

        res.status(200).json({
            success: true,
            message: "You gonna stationary record successfully !!",
            data: { stationary }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/** get list */
const getStationaryList = async (req, res) => {
    try {
        const getList = await stationaryService.getStationaryList(req, res);
        res.status(200).json({
            success: true,
            message: "Your stationary list created successfullYyy !!",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/** get stationary record by id */
const getStationaryDetails = async (req, res) => {
    try {
        const getId = await stationaryService.stationaryById(req.params.stationaryId);
        if (!getId) {
            throw new Error("Stationary not found !");
        }

        res.status(200).json({
            success: true,
            message: "Your stationary record get successfullYyy !! ",
            data: { getId }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/**Update record */
const updateStationary = async (req, res) => {
    try {
        const stationaryId = req.params.stationaryId;

        const stationaryEx = await stationaryService.stationaryById(stationaryId);
        if (!stationaryEx) {
            throw new Error("Stationary not Found !!");
        }

        await stationaryService.updateStationary(stationaryId, req.body);

        res.status(200).json({
            success: true,
            messsge: "Your stationary record update successfullYy !"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/** delete record */
const deleteRecord = async (req, res) => {
    try {
        const stationaryId = req.params.stationaryId;

        const stationaryExist = await stationaryService.getStationaryList(stationaryId);
        if (!stationaryExist) {
            throw new Error("Stationary not found !");
        }

        await stationaryService.deleteRecord(stationaryId);

        res.status(200).json({
            success: true,
            message: "Your record delete successfullYy !!"
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

module.exports = {
    createStationary,
    getStationaryList,
    deleteRecord,
    getStationaryDetails,
    updateStationary
}