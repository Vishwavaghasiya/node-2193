const { musicService } = require("../services");

/**create music */
const createMusic = async (req, res) => {
    try {
        const reqBody = req.body;

        const music = await musicService.createMusic(reqBody);
        if (!music) {
            throw new Error("Something wents wrong , please try again or later !!");
        }

        res.status(200).json(
            {
                success: true,
                message: "Music data create successfullYy !",
                data: { music }
            }
        )

    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** get list of music */
const getMusicList = async (req, res) => {
    try {
        const getList = await musicService.getMusicList(req, res);
        res.status(200).json(
            {
                success: true,
                message: "Get music list successfully !",
                data: { getList }
            }
        )
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/**Get music by Id */
const getMusicDetails = async (req, res) => {
    try {
        const getDetails = await musicService.getMusicById(req.params.musicId);
        if (!getDetails) {
            throw new Error("Music not Found !!");
        }

        res.status(200).json({
            success: true,
            message: "You wonna get music details successfullYyyy !!",
            data: { getDetails }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/**Update record */
const updateMusic = async (req, res) => {
    try {
        const musicId = req.params.musicId;

        const musicEx = await musicService.getMusicById(musicId);
        if (!musicEx) {
            throw new Error("Music not found !!");
        }

        await musicService.updateMusic(musicId, req.body);

        res.status(200).json({
            success: true,
            message: "Your music details update successfullYyy !!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/** delete record */
const deleteRecord = async (req, res) => {
    try {
        const musicId = req.params.musicId;
        const musicExist = musicService.getMusicList(musicId);
        if (!musicExist) {
            throw new Error("Music not found !");
        }

        await musicService.deleteRecord(musicId);

        res.status(200).json({
            success: true,
            message: "This id and inside data delete successfullYyy !!"
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}
module.exports = {
    createMusic,
    getMusicList,
    getMusicDetails,
    updateMusic,
    deleteRecord
}