import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const MovieForm = props => {

    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [rating, setRating] = useState();
    const [review, setReview] = useState("");
    const [errors, setErrors] = useState({});

    const create = e => {
        e.preventDefault();
        const newMovie = {title, name, rating, review};
        axios.post("http://localhost:8000/api/movies", newMovie)
            .then(res => {
                if(res.data.errors) {
                    setErrors(res.data.errors);
                    console.log(res.data.errors);
                } else {
                    navigate("/")
                }
            }).catch(err => console.log(err));
    }

    return(
        <div className="row">
            <form className="col-sm-6 mt-5" onSubmit={create}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" onChange={e => setTitle(e.target.value)} />
                    {errors.title ? <p className="text-danger">{errors.title.properties.message}</p>: ""}
                </div>
                <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" className="form-control" onChange={e => setName(e.target.value)} />
                    {errors.name ? <p className="text-danger">{errors.name.properties.message}</p>: ""}
                </div>
                <div className="form-group">
                    <label>Rating</label>
                    <input type="number" className="form-control" onChange={e => setRating(e.target.value)} />
                    {errors.rating ? <p className="text-danger">{errors.rating.properties.message}</p>: ""}
                </div>
                <div className="form-group">
                    <label>Review</label>
                    <input type="text" className="form-control" onChange={e => setReview(e.target.value)} />
                    {errors.review ? <p className="text-danger">{errors.review.properties.message}</p>: ""}
                </div>
                <input type="submit" className="btn btn-outline-primary" value="Add Movie" />
            </form>
        </div>
    )
}

export default MovieForm;