const Movie = require('../Models/Movies'); // Ensure the path to your Movie model is correct

exports.searchMovies = async (req, res) => {
  try {
    // Retrieve the search term from the query string
    const searchTerm = req.query.term;

    // Use a regex for a simple case-insensitive search
    const searchResult = await Movie.find({
      title: { $regex: new RegExp(searchTerm, 'i') }
    });

    // Send back the search results
    res.json(searchResult);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ message: 'Server Error during movie search' });
  }
};
