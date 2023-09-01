const { Book } = require("../models");

const createBook = async (reqBody) => {
  return Book.create(reqBody);
};

const getBookList = async (req, res) => {
  return Book.find({$or:[{is_active:true}]});
};

const deleteBook = async (bookId) => {
  return Book.findByIdAndDelete(bookId);
};

const bookById = async (bookId) => {
  return Book.findById(bookId);
};

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