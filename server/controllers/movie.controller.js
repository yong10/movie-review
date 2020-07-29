const Movie = require("../models/movie.model");

class MovieController {
    getAll(req, res) {
        Movie.find()
            .then(movies => res.json(movies))
            .catch(errors => res.json(errors));
    }
    create(req, res) {
        const newMovie = new Movie(req.body);
        newMovie.save()
            .then ( () => {
                res.json(newMovie)
            })
            .catch(errors => res.json(errors));
    }
    getOne(req, res) {
        Movie.findOne({_id: req.params._id})
            .then(oneMovie => res.json(oneMovie))
            .catch(err => res.json(err))
    }
    addReview(req, res) {
        Movie.findByIdAndUpdate({_id: req.params._id}, {$push: {reviews: req.body}}, {runValidators: true},)
            .then( () => res.json({msg: "Successfully updated!"}))
            .catch(errors => res.json(errors));
    }
    delete(req, res) {
        Movie.findByIdAndDelete({_id: req.params._id})
            .then( () => res.json({msg: "Successfully deleted!"}))
            .catch(err => res.json(err))
    }
}

module.exports = new MovieController;