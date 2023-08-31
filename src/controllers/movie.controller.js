const { movieService } = require('../services');

/** create movie */
const createMovie = async (req, res) => {
    try {
        const reqBody = req.body;

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

/**Get movie by Id */
const getMovieDetails = async (req, res) => {
    try {
        const getDetails = await movieService.getMovieById(req.params.movieId);
        if (!getDetails) {
            throw new Error("Movie not Found !!");
        }

        res.status(200).json({
            success: true,
            message: "You wonna get movie details successfullYyyy !!",
            data: { getDetails }
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/**Update record */
const updateMovie = async (req, res) => {
    try {
        const movieId = req.params.movieId;

        const movieEx = await movieService.updateMovie(movieId);
        if (!movieEx) {
            throw new Error("movie not found !!");
        }

        await movieService.updateMovie(movieId, req.body);

        res.status(200).json({
            success: true,
            message: "Your movie details update successfullYyy !!"
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
}

/** delete movie data by Id */
const deleteRecord = async (req, res) => {
    try {
        const movieId = req.params.movieId;
        const movieExist = await movieService.getMovieList(movieId);
        if (!movieExist) {
            throw new Error("Movie not found !");
        }

        await movieService.deleteRecord(movieId);

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
    getMovieDetails,
    updateMovie,
    deleteRecord
}