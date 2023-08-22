const { busService } = require('../services')

/** create bus */
const createBus = async (req, res) => {
    try {
        const reqBody = req.body;

        const bus = await busService.createBus(reqBody);
        if (!bus) {
            throw new Error('Something wents wrong , please try again or later !');
        }

        res.status(200).json(
            {
                success: true,
                message: 'bus module create successfully !',
                data: { bus },
            }
        );
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** get bus list */
const getBusList = async (req, res) => {
    try {
        const { search, ...options } = req.query;
        let filter = {};

        if (search) {
            filter.$or = [
                { busName: { $regex: search, $options: "i" } },
                { busNumber: { $regex: search, $options: "i" } },
            ];
        }

        const getList = await busService.getBusList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get bus list successfully !",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete bus */
const deleteBus = async (req, res) => {
    try {
        const busId = req.params.busId;
        const busExists = await busService.getBusList(busId);
        if (!busExists) {
            throw new Error("Bus not found !!");
        }

        await busService.deleteBus(busId);

        res.status(200).json({
            success: true,
            message: "Bus delete successfully !!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createBus,
    getBusList,
    deleteBus
}