const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieRatingSchema = new Schema({
  movie: { type: Schema.Types.ObjectId, ref: 'movies', required: true },
  rating: { type: Number, required: true, min: 1, max: 10 }
}, { _id: false });

const ratingSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'users', required: true, unique: true },
  ratings: [movieRatingSchema]
});

module.exports = mongoose.models.ratings || mongoose.model('ratings', ratingSchema);
