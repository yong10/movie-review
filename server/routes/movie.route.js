const Movies = require("../controllers/movie.controller");

module.exports = app => {
    app.get("/api/movies", Movies.getAll);
    app.post("/api/movies", Movies.create);
    app.get("/api/movies/:_id", Movies.getOne);
    app.put("/api/movies/:_id/add_review", Movies.addReview);
    app.delete("/api/movies/:_id/delete", Movies.delete);
}