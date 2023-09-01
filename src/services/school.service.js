const { School } = require("../models");

/**Create record */
const createSchool = async (reqBody) => {
    return School.create(reqBody);
}

/**Get list */
const getSchoolList = async (req, res) => {
    return School.find({ $or: [{ is_active: true }] });
}

/**Delete record */
const deleteRecord = async (schoolId) => {
    return School.findByIdAndDelete(schoolId);
}

/**Find by id */
const schoolById = async (schoolId) => {
    return School.findById(schoolId);
}

/**Update record */
const updateSchool = async (schoolId , updateBody) => {
    return School.findByIdAndUpdate(schoolId, { $set: updateBody });
}

module.exports = {
    createSchool,
    getSchoolList,
    deleteRecord,
    schoolById,
    updateSchool
}