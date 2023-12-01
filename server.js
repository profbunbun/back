let express = require('express')
let mongoose = require('mongoose')
let cors = require('cors')
// const dotenv = require('dotenv');

// dotenv.config();
// Express Route
const profileRoutes = require('./routes/profile.route');
const moviesRoute = require('./routes/movies.route')
const searchRoute = require('./routes/search.route')
const userRoute = require('./routes/user.route')
const ratingRoutes = require('./routes/rating.route');

const path = require('path')
const app = express()
mongoose.set('strictQuery', false);


mongoose.connect(
    process.env.MONGODB_URI
)
.then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
})
.catch((err) => {
    console.error('Error connecting to mongo', err.reason)
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())
app.get("/api", (req, res) => {
    res.status(200).send({message: "Welcome"});
})
app.use('/movies', moviesRoute)
app.use('/search', searchRoute)
app.use('/profile', profileRoutes)
app.use('/users',userRoute)
app.use('/ratings', ratingRoutes);

// PORT
const port = process.env.PORT || 4000
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

// // 404 Error
// app.use((req, res, next) => {
//     next(createError(404))
// })
// app.use(function (err, req, res, next) {
//     console.error(err.message)
//     if (!err.statusCode) err.statusCode = 500
//     res.status(err.statusCode).send(err.message)
// })
