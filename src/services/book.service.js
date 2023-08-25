const { Book } = require("../models");

const createBook = async (reqBody) => {
  return Book.create(reqBody);
};

const getBookList = async (req, res) => {
  return Book.find({ $or: [{ is_active: false }] });
};

const deleteBook = async (bookId) => {
  return Book.findByIdAndDelete(bookId);
};

const getBookById = async (bookId) => {
  return Book.findById(bookId);
};

module.exports = {
  createBook,
  getBookList,
  deleteBook,
  getBookById,
}