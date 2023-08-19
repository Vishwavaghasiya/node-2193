const { bookService } = require('../services')

/** get book details */
const getBook = async (req, res) => {
    try {
        const reqBody = req.body;

        const book = await bookService.getBook(reqBody);
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

module.exports = {
    getBook
}