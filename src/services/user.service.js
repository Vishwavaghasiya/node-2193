const { User } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createUser = async (reqBody) => {
  // console.log(reqBody);
  return User.create(reqBody);
};

module.exports = { createUser };