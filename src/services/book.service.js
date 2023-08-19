const { Book } = require("../models");

/**
 * create book(list API)
 * @param {object} reqBody
 * @returns {Promise<User>}
 */

const createBook = async (reqBody) => {
  // console.log(reqBody);
  return Book.create(reqBody);
};

/**
 * Get book list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const getBookList = async (filter, options) => {;
  return Book.find(filter);
};

module.exports = {
  createBook,
  getBookList
}