import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=19d39ea6&i=${id}&plot=full`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const poster =
    movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300";

  return (
    <div className="movie-detail">
      <h2>{movie.Title}</h2>
      <img src={poster} alt={movie.Title} />
      <p>
        <strong>Plot:</strong> {movie.Plot}
      </p>
      <p>
        <strong>Director:</strong> {movie.Director}
      </p>
      <p>
        <strong>Actors:</strong> {movie.Actors}
      </p>
      <p>
        <strong>Genre:</strong> {movie.Genre}
      </p>
      <p>
        <strong>Released:</strong> {movie.Released}
      </p>
    </div>
  );
};

export default MovieDetail;
