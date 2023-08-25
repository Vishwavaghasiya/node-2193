const { travelService } = require("../services");

/** create record */
const createTravel = async (req,res) => {
    try {
        const reqBody = req.body;

        const travel = await travelService.createTravel(reqBody);
        if(!travel){
            throw new Error("Something wents wrong , please try again or later !");
        }

        res.status(200).json({
            success : true,
            message : "You created travel record successfully !!",
            data : { travel}
        });
    } catch (error) {
        res.status(400).json({ success : false , message : error.message});
    }
}

/** get list */
const getTravelList = async (req,res) => {
    try {
        const getList = await travelService.getTravelList(req , res);
        res.status(200).json({
            success : true,
            message : "your travel list create successfully !!",
            data : { getList }
        });
    } catch (error) {
        res.status(400).json({ success : false , message : error.message });
    }
}

/**delete record */
const deleteRecord = async (req,res) => {
    try {
        const travelId = req.params.travelId;

        const travelExist = await travelService.getTravelList(travelId);
        if(!travelExist){
            throw new Error("Travel not Found !!");
        }

        await travelService.deleteRecord(travelId);

        res.status(200).json({
            success : true,
            message : "Your travel record delete successfullYyy !!",
        })
    } catch (error) {
        res.status(400).json({ success : false , message : error.message});
    }
}

module.exports = {
    createTravel,
    getTravelList,
    deleteRecord
}