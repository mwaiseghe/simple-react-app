import React from 'react';

const MovieCard = ({movie})=>{
    return(
        <div className="movie">
            <small className="movie-title">{movie.Year}</small>

            <div className="movie-image">
                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt="" srcset="" />
            </div>
            <div className="movie-details">
                <h2 className="movie-title">{movie.Title}</h2>
                <small className="movie-year">{movie.Type}</small>
            </div>
        </div>
    );
}


export default MovieCard;