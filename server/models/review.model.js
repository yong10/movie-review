const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Name is required!"]
    },
    rating: {
        type: Number,
        required: [true, "Rating is required!"]
    },
    review: {
        type: String,
        required: [true, "Review is required!"]
    }
}, {timestamps: true});

module.exports = ReviewSchema;