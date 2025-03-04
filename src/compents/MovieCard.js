import React from "react";
import "../compents/MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.URL} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p className="note"> {movie.note}</p>
    </div>
  );
}

export default MovieCard;
