import { useState } from 'react'
import { MovieCard } from './components/MovieCard'
import { NavBar } from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import {Home} from "./pages/Home"
import {Favourite} from "./pages/Favourite"
import { MovieProvider } from './contexts/favourite'

function App() {

  return (
    <MovieProvider>
    <NavBar/>
    <main className="main-content">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favourites" element={<Favourite/>}/>
    </Routes>
    </main>
    </MovieProvider>
  )
}

export default App
