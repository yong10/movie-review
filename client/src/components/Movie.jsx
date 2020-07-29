import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';


const Movie = props => {
    
    const [all, setAll] = useState([]);
    
    const getMovies = () => {
        axios.get("http://localhost:8000/api/movies")
            .then(res => {
                console.log(res);
                setAll(res.data);
            }).catch(err => console.log(err));
    }

    useEffect( () => {
        getMovies();
    }, []);
    
    return (
        <div className="mt-5">
            
            
                <table className="table table-striped">
                    <tr className="thead-dark">
                        <th>Movie Title</th>
                        <th>Avg. Rating</th>
                        <th>Actions</th>
                    </tr>
                    {all.map(movie =>
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.rating}</td>
                            <td>
                                <Link className="btn btn-outline-primary" to={`/movies/${movie._id}`}>Read Reviews</Link>
                                <Link className="btn btn-outline-warning" to={`/movies/${movie._id}/review`}>Add Review</Link>
                            </td>
                        </tr>
                    )}
                </table>
        </div>
    )
}

export default Movie;