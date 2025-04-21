import { useMovieContext } from "../contexts/favourite";
import "../css/MovieCard.css";

export function MovieCard({ movie }) {
  const { isFavourite, removeFromFavourites, addToFavourites } =
    useMovieContext();
  const favourite = isFavourite(movie.id);

  function handleClick(e) {
    e.preventDefault();
    if (favourite) removeFromFavourites(movie.id);
    else addToFavourites(movie);
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favourite ? "active" : ""}`}
            onClick={handleClick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}
