const { Pharmacy } = require("../models");

/**Create record */
const createPharmacy = async (reqBody) => {
    return Pharmacy.create(reqBody);
}

/**Get list */
const getPharmacyList = async (req, res) => {
    return Pharmacy.find({ $or: [{ is_active: true }] });
}

/**Delete record */
const deleteRecord = async (pharmacyId) => {
    return Pharmacy.findByIdAndDelete(pharmacyId);
}

/**Find by id */
const pharmacyById = async (pharmacyId) => {
    return Pharmacy.findById(pharmacyId);
}

/**Update record */
const updatePharmacy = async (pharmacyId, updateBody) => {
    return Pharmacy.findByIdAndUpdate(pharmacyId, { $set: updateBody });
}

module.exports = {
    createPharmacy,
    getPharmacyList,
    deleteRecord,
    pharmacyById,
    updatePharmacy
}