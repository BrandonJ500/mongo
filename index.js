const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/App', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connection open")
    })
    .catch((err) => {
        console.log("Error", err);
    })

const movieSchema = new mongoose.Schema({
    title:String,
    year:Number,
    score:Number,
    rating:String
})

const Movie = mongoose.model("Movie", moveSchema);