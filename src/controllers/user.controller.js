const { userService } = require("../services");

/** create user record */
const createUser = async (req,res) => {
    try {
        const reqBody = req.body;

        const user = await userService.createUser(reqBody);
        if(!user){
            throw new Error("Something wents wrong , please try again or later !!");
        }

        res.status(200).json({
            success : true,
            message : "Your data create successfully !!"
        });
    } catch (error) {
        res.status(400).json({success : fasle , message : error.message});
    }
}

/** get list */
const getUserList = async (req,res) => {
    try {
        const getList = await userService.getUserList(req , res);

        res.status(200).json({
            success : true,
            message : "Your user list create successfullYyy !",
            data : { getList }
        });
    } catch (error) {
        res.status(400).json({
            success : false , message : error.message
        });
    }
}

/** delete record */
const deleteRecord = async (req, res) => {
    try {
        const userId = req.params.userId;

        const userExist = await userService.getUserList(userId);
        if(!userId){
            throw new Error ("User not found");
        }

        await userService.deleteRecord(userId);

        res.status(200).json({
            success : true,
            message : "Your record delete successfully !!"
        })
    } catch (error) {
        res.status(400).json({
            success : false ,
            message : error.message
        });
    }
}

module.exports = {
    createUser,
    getUserList,
    deleteRecord
}