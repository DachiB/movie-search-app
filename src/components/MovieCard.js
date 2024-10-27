import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, addToFavorites }) => {
  const poster =
    movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150";

  return (
    <div className="movie-card">
      <img src={poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <Link to={`/movie/${movie.imdbID}`}>View Details</Link>
      <button onClick={() => addToFavorites(movie)}>Add to Favorites</button>
    </div>
  );
};

export default MovieCard;
