import React from "react";
import MovieCard from "./MovieCard";

const Favorites = ({ favorites }) => {
  return (
    <div className="favorites">
      <h2>Your Favorites</h2>
      {favorites.length > 0 ? (
        <div className="movie-list">
          {favorites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <p>No favorite movies added.</p>
      )}
    </div>
  );
};

export default Favorites;
