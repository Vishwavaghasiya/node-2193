const { schoolService } = require("../services");

/** create record of school */
const createSchool = async (req, res) => {
    try {
        const reqBody = req.body;

        const school = await schoolService.createSchool(reqBody);
        if (!school) {
            throw new Error("Something wents wrong , please try again or later !!");
        }

        res.status(200).json({
            success: true,
            message: "Your school record create successfully !!",
            data: { school }
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/** get list of school */
const getSchoolList = async (req, res) => {
    try {
        const getList = await schoolService.getSchoolList(req, res);
        res.status(200).json({
            success: true,
            message: "School list create successfully !! ",
            data: { getList }
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

/** Get school by id */
const getSchoolDetails = async (req, res) => {
    try {
        const getId = await schoolService.schoolById(req.params.schoolId);
        if (!getId) {
            throw new Error("School not found !!");
        }

        res.status(200).json({
            success: true,
            message: "You wonna see one record by school id !!",
            data: { getId }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/**Update record */
const updateSchool = async (req, res) => {
    try {
        const schoolId = req.params.schoolId;

        const schoolEx = await schoolService.schoolById(schoolId);
        if (!schoolEx) {
            throw new Error("Your record is not found !");
        }

        await schoolService.updateSchool(schoolId, req.body);

        res.status(200).json({
            success: true,
            message: "Your record is update successfullYy !!"
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/** delete record */
const deleteRecord = async (req, res) => {
    try {
        const schoolId = req.params.schoolId;

        const schoolExist = await schoolService.getSchoolList(schoolId);
        if (!schoolExist) {
            throw new Error("School not found!!");
        }

        await schoolService.deleteRecord(schoolId);

        res.status(200).json({
            success: true,
            message: "Record delete successfullYyy !!"
        })

    } catch (error) {
        res.status(400).json({ succsess: false, message: error.message });
    }
}

module.exports = {
    createSchool,
    getSchoolList,
    deleteRecord,
    getSchoolDetails,
    updateSchool
}