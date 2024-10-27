import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MovieCard = ({ movie, addToFavorites }) => {
  const poster =
    movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150";

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="movie-card"
      variants={cardVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <Link to={`/movie/${movie.imdbID}`} className="details"> View Details</Link>
      <button onClick={() => addToFavorites(movie)}>Add to Favorites</button>
    </motion.div>
  );
};

export default MovieCard;
