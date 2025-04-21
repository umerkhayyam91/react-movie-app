import { useEffect, useState } from "react";
import { MovieCard } from "../components/MovieCard";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

export function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const popularMovies = async () => {
      try {
        const popular = await getPopularMovies();
        console.log("popular", popular);
        setMovie(popular);
      } catch (error) {
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };
    popularMovies();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!search.trim()) return;
    console.log("search", search)
    if (loading) return;
    setLoading(true);
    try {
      const searched = await searchMovies(search);
      setMovie(searched);
      setError(null);
    } catch (error) {
      setError("failed to search movies");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="home">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="search for movies..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="error-message">{error}</div>
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}
