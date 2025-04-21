import { MovieCard } from "../components/MovieCard"
import { useMovieContext } from "../contexts/favourite";

export function Favourite() {
    const {favourites} = useMovieContext()
    if(favourites) {
        return (
            <div className="favourites">
                <h2>Your Favourites</h2>
                <div className="movies-grid">
                    {favourites.map(movie => {
                        return <MovieCard key={movie.id} movie={movie}/>
                    })}
                </div>
            </div>
        )
    }
    return (
        <>
        <h2>No Favourites Found</h2>
        <p>Please add favourites to ciew</p>
        </>
    )
}