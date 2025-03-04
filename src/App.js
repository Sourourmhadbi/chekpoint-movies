import React, { useState } from "react";
import ListMovie from "./compents/ListMovie";
import Filter from "./compents/Filter";
import "./App.css";
import url from './compents/assets/img.jpg';
import path from './compents/assets/image.jpg';
import image from './compents/assets/image1.jpg'

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller.",
      URL:url,
      note: 4.8,
      
    },
    {
      title: "Breaking Bad",
      description: "A high school teacher turned drug kingpin.",
      URL:path,
      note: 4.9,
     
    },
    {
      title: "Interstellar",
      description: "A journey beyond the stars.",
      URL:image,
      note: 8.6,
    },
  ]);

  const [filter, setFilter] = useState({ title: "", note: 0 });

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.note >= filter.note
  );

  return (
    <div className="app-container">
      <h1>🎥 Ma Collection de Films</h1>
      <Filter filter={filter} onFilterChange={handleFilterChange} onAddMovie={addMovie} />
      <ListMovie movies={filteredMovies} />
    </div>
  );
}

export default App;
