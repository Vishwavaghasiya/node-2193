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
        // Destructuring the 'search' property from the query string of the HTTP request, and storing the remaining query parameters in the 'options' object.
        const { search, ...options } = req.query;

        // Initialize an empty 'filter' object which will be used to construct the query filter.

        let filter = {};

        // If a search query is provided, construct a filter that performs a case-insensitive regular expression search on both 'book_name' and 'auther_name' fields.

        if (search) {
            filter.$or = [
                { book_name: { $regex: search, $options: "i" } },
                { auther_name: { $regex: search, $options: "i" } },
            ];
        }

        // Call the 'getBookList' function from a service (presumably 'bookService') passing the constructed 'filter' and 'options' as arguments.

        const getList = await bookService.getBookList(filter, options);

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