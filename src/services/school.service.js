const { School } = require("../models");

const createSchool = async (reqBody) => {
    return School.create(reqBody);
}

const getSchoolList = async (req, res) => {
    return School.find({ $or: [{ is_active: false }] });
}

const deleteRecord = async (schoolId) => {
    return School.findByIdAndDelete(schoolId);
}

const schoolById = async (schoolId) => {
    return School.findById(schoolId);
}

module.exports = {
    createSchool,
    getSchoolList,
    deleteRecord,
    schoolById
}