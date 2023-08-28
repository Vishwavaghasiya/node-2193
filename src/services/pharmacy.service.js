const { Pharmacy } = require("../models");

const createPharmacy = async (reqBody) => {
    return Pharmacy.create(reqBody);
}

const getPharmacyList = async (req, res) => {
    return Pharmacy.find({ $or: [{ is_active: true }] });
}

const deleteRecord = async (pharmacyId) => {
    return Pharmacy.findByIdAndDelete(pharmacyId);
}

const pharmacyById = async (pharmacyId) => {
    return Pharmacy.findById(pharmacyId);
}

module.exports = {
    createPharmacy,
    getPharmacyList,
    deleteRecord,
    pharmacyById
}