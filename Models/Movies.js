const mongoose = require('mongoose')
const Schema = mongoose.Schema
let moviesSchema = new Schema(
    {
        id: {
            type: String,
        },
        plot: { type: String },
        genres: [{ type: String }],
        runtime: { type: Number },
        cast: [{ type: String }],
        title: { type: String },
        fullplot: { type: String },
        languages: [{ type: String }],
        released: { type: Date },
        directors: [{ type: String }],
        writers: [{ type: String }],
        awards: {
            wins: { type: Number },
            nominations: { type: Number },
            text: { type: String },
        },
        lastupdated: { type: Date },
        year: { type: Number },
        imdb: {
            rating: { type: Number },
            votes: { type: Number },
            id: { type: Number },
        },
        countries: [{ type: String }],
        type: { type: String },
        tomatoes: {
            viewer: {
                rating: { type: Number },
                numReviews: { type: Number },
                meter: { type: Number },
            },
            production: { type: String },
            lastUpdated: { type: Date },
        },
        num_mflix_comments: { type: Number },
    },
    {
        collection: 'movies',
    },
)
module.exports = mongoose.models.movies || mongoose.model('movies', moviesSchema);