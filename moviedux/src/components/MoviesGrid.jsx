import "../styles.css";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("All Genres");
  const [rating, setRating] = useState("All Ratings");

  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div>
        <input
          type="text"
          className="search-input"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="filter-bar">
          <div
            className="filter-slot"
            value={genre}
            onChange={handleGenreChange}
          >
            <label>Genre</label>
            <select>
              <option>All Genre</option>
              <option>Action</option>
              <option>Drama</option>
              <option>Fantasy</option>
              <option>Horror</option>
            </select>
          </div>

          <div
            className="filter-slot"
            value={rating}
            onChange={handleRatingChange}
          >
            <label>Rating</label>
            <select>
              <option>All</option>
              <option>Good</option>
              <option>Ok</option>
              <option>Bad</option>
            </select>
          </div>
        </div>

        <div className="movies-grid">
          {filteredMovies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default MoviesGrid;
