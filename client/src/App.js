import React from 'react';
import Movies from './components/Movie';
import { Link, Router } from '@reach/router';
import MovieForm from './components/MovieForm';
import Movie from './components/Movie';
import ReviewInfo from './components/ReviewInfo';
import AddReview from './components/AddReview';

function App() {
  return (
    <div className="container">
      <Link className="btn btn-info mt-3" to="/">Movie(s) List</Link>
      <Link className="btn btn-info mt-3" to="/movies/new">Add a New Movie</Link>
        <Router>
          <Movie path="/" />
          <MovieForm path="/movies/new" />
          <ReviewInfo path="/movies/:_id" />
          <AddReview path="/movies/:_id/review" />
          </Router>
    </div>
  );
}

export default App;
