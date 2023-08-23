const { movieService } = require('../services');

/** create movie controller */
const createMovie = async (req, res) => {
    try {
        const reqBody = req.Body;

        const movie = await movieService.createMovie(reqBody);
        if (!movie) {
            throw new Error("Something wents wrong , Please try again or later !!");
        }

        res.status(200).json(
            {
                success: true,
                message: "movie module create successfullYyy !!",
                data: { movie }
            }
        )
    } catch (error) {
        res.status(400).json(
            {
                success: false,
                message: error.message
            }
        )
    }
}

/** get list of movie */
const getMovieList = async (req, res) => {
    try {
        const getList = await movieService.getMovieList(req, res);

        res.status(200).json(
            {
                success: true,
                message: "Get movie list successfully !",
                data: { getList }
            }
        )
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/** delete movie data by Id */
const deleteRecord = async (req, res) => {
    try {
        const movieId = req.params.movieId;
        const movieExist = await movieService.deleteRecord(movieId);
        if (!movieExist) {
            throw new Error("Movie not found !");
        }

        res.status(200).json(
            {
                success: true,
                message: "Movie delete successfully !"
            }
        )
    } catch (error) {
        res.status(400).json({
            success: false, message: error.message
        })
    }
}

module.exports = {
    createMovie,
    getMovieList,
    deleteRecord
}