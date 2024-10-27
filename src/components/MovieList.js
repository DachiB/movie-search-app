import React from "react";
import MovieCard from "./MovieCard";
import { motion } from "framer-motion";

const MovieList = ({ movies, addToFavorites }) => {
  return (
    <motion.div
      className="movie-list"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.8,
        },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
          },
        },
      }}
    >
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
    </motion.div>
  );
};

export default MovieList;
