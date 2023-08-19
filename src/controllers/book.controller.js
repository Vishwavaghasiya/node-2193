const { bookService } = require('../services')

/** create book list */
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
        const { search, ...options } = req.query;
        let filter = {};

        if (search) {
            filter.$or = [
                { book_name: { $regex: search, $options: "i" } },
                { auther_name: { $regex: search, $options: "i" } },
            ];
        }

        const getList = await bookService.getBookList(filter, options);

        res.status(200).json({
            success: true,
            message: "Get book list successfully!",
            data: getList,
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};
module.exports = {
    createBook,
    getBookList
}