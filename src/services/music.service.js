const { Music } = require("../models");

/**Create record */
const createMusic = async (reqBody) => {
    return Music.create(reqBody);
}

/**Get list */
const getMusicList = async (req, res) => {
    return Music.find({ $or: [{ is_active: true }] });
}

/**Delete record */
const deleteRecord = async (musicId) => {
    return Music.findByIdAndDelete(musicId);
}

/**Find by id */
const getMusicById = async (musicId) => {
    return Music.findById(musicId);
}

/**Update record*/
const updateMusic = async (musicId, updateRecord) => {
    return Music.findByIdAndUpdate(musicId, { $set: updateRecord });
}

module.exports = {
    createMusic,
    getMusicList,
    deleteRecord,
    getMusicById,
    updateMusic
}