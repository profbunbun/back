const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

// Search movies
router.get('/', searchController.searchMovies);

module.exports = router;
