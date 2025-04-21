import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favourites, setFavourites] = useState([])

    useEffect(() => {
        const fetchFavourites = localStorage.getItem("favourites")
        if (fetchFavourites) {
            setFavourites(JSON.parse(fetchFavourites))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites))
    }, [favourites])

    const addToFavourites = (movie) => {
        setFavourites(prev => [...prev, movie])
    }

    const removeFromFavourites = (movieId) => {
        setFavourites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavourite = (movieId) => {
        return favourites.some(fav => fav.id === movieId)
    }

    return (
        <MovieContext.Provider value={{ favourites, addToFavourites, removeFromFavourites, isFavourite }}>{children}</MovieContext.Provider>
    )
}