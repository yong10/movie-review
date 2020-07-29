import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


const ReviewInfo = props => {
    
    const [all, setAll] = useState([]);
    const [poster, setPoster] = useState([]);

    console.log("the props are loggin below")
    console.log(props)
    const getMovies = () => {
        axios.get(`http://localhost:8000/api/movies/${props._id}`)
            .then(res => {
                console.log(res);
                setAll(res.data.reviews);
                console.log(res.data);
            }).catch(err => console.log(err));
    }

    const getMaker = () => {
        axios.get(`http://localhost:8000/api/movies/${props._id}`)
            .then(res => {
                setPoster(res.data);
            }).catch(err => console.log(err));
    }

    useEffect( () => {
        getMovies();
        getMaker();
    }, []);

    const remove = () => {
        axios.delete(`http://localhost:8000/api/movies/${props._id}/delete`)
            .then(res => {
                console.log(res);
                navigate("/")
            }).catch(err => console.log(err));
    }
    
    return (
        <div className="mt-5">
            <h3>Movie Title: {poster.title}</h3>
            <h5>Poster's Name: {poster.name}</h5>
            <h5>Poster's Rating: {poster.rating}</h5>
            <h5>Poster's Review: {poster.review}</h5>
            <button className="btn btn-outline-danger my-3" onClick={remove}>Remove Movie</button>
            <table className="table table-striped">
                <tr className="thead-dark">
                    <th>Name</th>
                    <th>Rating</th>
                    <th>Review</th>
                </tr>
                {all.map(review=>
                    <tr>
                        <td>{review.name}</td>
                        <td>{review.rating}</td>
                        <td>{review.review}</td>
                    </tr>
                )}
            </table>
        </div>
    )
}

export default ReviewInfo;