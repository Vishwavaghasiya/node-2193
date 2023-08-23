const { hotelService } = require('../services');

/** create hotel module */
const createHotel = async (req, res) => {
    try {
        const reqBody = req.body;

        const hotel = await hotelService.createHotel(reqBody);
        if (!hotel) {
            throw new Error("Something wents wrong , please try again or later !!");
        }

        res.status(200).json(
            {
                success: true,
                message: "hotel module create successfully",
                data: { hotel }
            }
        );
    } catch (error) {
        res.status(400).json(
            {
                success: false,
                message: error.message
            }
        );
    }
}

/** get hotel list */
const getHotelList = async (req, res) => {
    try {
        const getList = await hotelService.getHotelList(req, res);

        res.status(200).json(
            {
                success: true,
                message: "Get hotel list successfully !!",
                data: { getList }
            }
        )
    } catch (error) {
        res.status(400).json(
            {
                success: false,
                message: error.message
            }
        );
    }
};

/** delete hotel record */
const deleteRecord = async (req, res) => {
    try {
        const hotelId = req.params.hotelId;
        const hotelExists = await hotelService.getHotelList(hotelId);
        if (!hotelExists) {
            throw new Error("Hotel not found !!");
        }

        await hotelService.deleteHotel(hotelId);

        res.status(200).json({
            success: true,
            message: "hotel delete successfully !!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

module.exports = {
    createHotel,
    getHotelList,
    deleteRecord
}