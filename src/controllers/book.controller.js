const { bookService } = require('../services')

/** create book */
const createBook = async (req, res) => {
    try {
        const reqBody = req.body;

        const book = await bookService.createBook(reqBody);
        if (!book) {
            throw new Error('Something wents wrong , please try again or later !');
        }

        res.status(200).json(
            {
                success: true,
                message: "book module create successfully !",
                data: { book },
            }
        );
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Get book list  */
const getBookList = async (req, res) => {
    try {
        const getList = await bookService.getBookList(req, res);

        // Respond to the HTTP request with a 200 status code, indicating success, and send a JSON response containing the retrieved book list.
        res.status(200).json({
            success: true,
            message: "Get book list successfully!",
            data: getList,
        });
    } catch (error) {
        // If an error occurs in the try block, respond to the HTTP request with a 400 status code, indicating a bad request, and send a JSON response containing the error message.
        res.status(400).json({ success: false, message: error.message });
    }
};

/** Delete book */
const deleteRecord = async (req, res) => {
    try {
        const bookId = req.params.bookId;
        const bookExists = await bookService.getBookById(bookId);
        if (!bookExists) {
            throw new Error("Book not found!");
        }

        await bookService.deleteBook(bookId);

        res.status(200).json({
            success: true,
            message: "Book delete successfully!",
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = {
    createBook,
    getBookList,
    deleteRecord
}