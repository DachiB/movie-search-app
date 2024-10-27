import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, addToFavorites }) => {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            addToFavorites={addToFavorites}
          />
        ))
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default MovieList;
