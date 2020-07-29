const mongoose = require("mongoose");
const ReviewSchema = require("./review.model");

const MovieSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: [true, "Movie Title is required!"]
    },
    name: {
        type: String,
        required: [true, "Name is required!"]
    },
    rating: {
        type: Number,
        required: [true, "Rating is required!"]
    },
    review: {
        type:String,
        required: [true, "Review is required!"]
    },
    reviews: [ReviewSchema]
    
}, {timestamps: true});

module.exports = mongoose.model("Movie", MovieSchema)