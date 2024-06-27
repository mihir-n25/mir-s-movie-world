import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";

const ApiUrl = "http://www.omdbapi.com?apikey=442ccfd6";

// const movie1 = {
//   Title: "Asur: Welcome to Your Dark Side",
//   Year: "2020",
//   imdbID: "tt11912196",
//   Type: "series",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BNjczODVjMmMtNTVlNy00MjlkLWEyZjYtOThiYzMwZmIyNWZkXkEyXkFqcGdeQXVyMTY0NjI3Mjcx._V1_SX300.jpg",
// };
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${ApiUrl}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("superman");
  }, []);

  return (
    <div className="app">
      <h1>Kunal's MovieWorld</h1>

      <div className="search">
        <input
          placeholder="search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img 
        src={SearchIcon} 
        alt="" 
        onClick={() => searchMovies(searchTerm)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Sorry, no movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;

// 442ccfd6
