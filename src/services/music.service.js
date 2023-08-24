const {Music} = require("../models");

const createMusic = async(reqBody) => {
    return Music.create(reqBody);
}

const getMusicList = async(req , res) => {
    return Music.find();
}

const deleteRecord = async(musicId) => {
    return Music.findByIdAndDelete(musicId);
}

const getMusicById = async (musicId) => {
    return Music.findById(musicId);
}

module.exports = {
    createMusic,
    getMusicList,
    deleteRecord,
    getMusicById
}