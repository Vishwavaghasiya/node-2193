const { School } = require("../models");

const createSchool = async (reqBody) => {
    return School.create(reqBody);
}

const getSchoolList = async (req, res) => {
    return School.find({ $or: [{ is_active: true }] });
}

const deleteRecord = async (schoolId) => {
    return School.findByIdAndDelete(schoolId);
}

const schoolById = async (schoolId) => {
    return School.findById(schoolId);
}

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