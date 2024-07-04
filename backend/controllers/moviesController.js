import Movie from "../models/Movie.js";

const getAllMovies = async (_, res) => {
  try {
    const movies = await Movie.find().limit(30).select("");
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: error });
    console.error(error);
  }
};

const getSingleMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ error: error });
    console.error(error);
  }
};

const filterGenres = async (req, res) => {
  const { genre } = req.params;
  try {
    const movies = await Movie.find({
      genres: { $in: [genre] },
    }).limit(20);
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: error });
    console.error(error);
  }
};

export { getAllMovies, getSingleMovie, filterGenres };
