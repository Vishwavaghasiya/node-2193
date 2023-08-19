const { Book } = require("../models");

/**
 * Get boo
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const getBook = async (reqBody) => {
  // console.log(reqBody);
  return Book.create(reqBody);
};

module.exports = {
  getBook
}