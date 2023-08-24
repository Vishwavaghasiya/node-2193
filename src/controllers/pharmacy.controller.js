const { pharmacyService } = require("../services");

/** create pharmacy */
const createPharmacy = async (req, res) => {
    try {
        const reqBody = req.body;

        const pharmacy = await pharmacyService.createPharmacy(reqBody);
        if (!pharmacy) {
            throw new Error("Something wents wrong , please try again or later !!");
        }

        res.status(200).json({
            succsess: true,
            message: "You gonna pharmacy record successfully !!",
            data: { pharmacy }
        });
    } catch (error) {
        res.status(400).json({ succsess: false, message: error.message });
    }
}

/** Get list */
const getPharmacyList = async (req, res) => {
    try {
        const getList = await pharmacyService.getPharmacyList(req, res);
        res.status(200).json({
            succsess: true,
            message: "You gonna get list of pharmacy record successfullYy !",
            data: { getList }
        });
    } catch (error) {
        res.status(400).json({ succsess: false, message: error.message });
    }
};

/** delete record */
const deleteRecord = async (req, res) => {
    try {
        const pharmacyId = req.params.pharmacyId;

        const pharmacyExist = await pharmacyService.getPharmacyList(pharmacyId);
        if (!pharmacyExist) {
            throw new Error("Pharmacy record not found !");
        }

        await pharmacyService.deleteRecord(pharmacyId);

        res.status(200).json({
            succsess: true,
            message: "Your pharmacy record delete successfullYy !!"
        })
    } catch (error) {
        res.status(400).json({ succsess: false, message: error.message });
    }
}

module.exports = {
    createPharmacy,
    getPharmacyList,
    deleteRecord
}