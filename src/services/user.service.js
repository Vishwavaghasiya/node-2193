const { User } = require("../models");

const createUser = async (reqBody) => {
  return User.create(reqBody);
}

const getUserList = async (req, res) =>{
  return User.find({ $or: [{ is_active: true }] });
}

const deleteRecord = async (userId) => {
  return User.findByIdAndDelete(userId);
}

const userById = async (userId) => {
  return User.findById(userId);
}

module.exports = {
  createUser,
  getUserList,
  deleteRecord,
  userById
}