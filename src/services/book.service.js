const { Book } = require("../models");

/**Create record*/
const createBook = async (reqBody) => {
  return Book.create(reqBody);
};

/**Get list */
const getBookList = async (req, res) => {
  return Book.find({ $or: [{ is_active: true }] });
};

/**Delete record */
const deleteBook = async (bookId) => {
  return Book.findByIdAndDelete(bookId);
};

/**Find by id */
const bookById = async (bookId) => {
  return Book.findById(bookId);
};

/**Update record */
const updateBook = async (bookId, updateBody) => {
  return Book.findByIdAndUpdate(bookId, { $set: updateBody });
}

module.exports = {
  createBook,
  getBookList,
  deleteBook,
  updateBook,
  bookById
}