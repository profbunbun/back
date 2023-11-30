// controllers/recommendationController.js
const Movie = require('../Models/Movies'); // Assuming this is the correct path
const Rating = require('../Models/Rating'); // Assuming this is the correct path
const axios = require('axios');
require('dotenv').config();
exports.getMovieRecommendation = async (req, res) => {
  try {
    const apiKey = "cba3a67952cafc295156d92ceaa0b396";
    const userId = req.params.userId;
   

    const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`);
    const moviesFromAPI = response.data.results;
    console.log(response);

    if (moviesFromAPI.length > 0) {
      // Pick a random movie from the array
      const randomIndex = Math.floor(Math.random() * moviesFromAPI.length);
      const randomMovie = moviesFromAPI[randomIndex];
      res.json(randomMovie); // Send the randomly selected movie as the response
    } else {
      res.status(404).json({ message: 'No movies available.' });
    }

  } catch (error) {
    console.error('Error getting movie recommendation:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};