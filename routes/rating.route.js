// routes/ratingRoutes.js
const express = require('express');
const { rateMovie } = require('../controllers/ratingController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, rateMovie);

module.exports = router;