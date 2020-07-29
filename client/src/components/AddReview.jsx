import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const AddReview = props => {
    const [name, setName] = useState("");
    const [rating, setRating] = useState();
    const [review, setReview] = useState("");
    const [errors, setErrors] = useState({});

    const submitReview = (e, _id) => {
        e.preventDefault();
        console.log(props);
        const newReview = {name, rating, review};
        console.log('logging new review below')
        console.log(newReview)
        axios.put(`http://localhost:8000/api/movies/${props._id}/add_review`, newReview)
            .then(res => {
                console.log("logging res below")
                console.log(res);
                if(res.data.errors){
                    setErrors(res.data.errors.reviews.errors);
                } else {
                    navigate(`/movies/${props._id}`)
                    console.log('in the else')
                }
            }).catch(err => console.log(err));
    }
    return (
        <div className="row">
            <form className="col-sm-6 mt-5" onSubmit={submitReview}>
                <div className="form-group">
                    <label>Name</label>
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
                <input type="submit" className="btn btn-outline-primary" value="Add Review" />
            </form>
        </div>
    )
}

export default AddReview;