import axios from "axios";
import SearchBar from "./components/searchBar";
import MovieList from "./components/searchMovies";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from "react";
import "./App.css";

import Inicio from "./pages/Inicio";
import Estrenos from "./pages/Estrenos";
import Categorias from "./pages/Categorias";
import Contactos from "./pages/Contactos";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [notFound, setNotFound] = useState(false);

  async function searchMovies(query) {
    try {
      const res = await axios.get(`https://www.omdbapi.com/`, {
        params: {
          apikey: "f2c66098",
          s: query
        }
      });

      if (res.data.Response === "True") {
        setMovies(res.data.Search);
        setMovies(false);
      } else {
        setMovies([]);
        setMovies(true);
      }
    } catch (error) {
      console.error("Error buscando películas:", error);
      setMovies([]);
      setNotFound(true);
    }
  }

  return (
    <BrowserRouter>
    <div className="layout">
      <header className="header">
        <p id = "title-cin">CINEstereo</p>
        <ul>
            <li className="menu">
             <Link to="/">Inicio</Link>
            </li>
            <li className="menu">
              <Link to="/estrenos">Estrenos</Link>
            </li>
            <li className="menu">
              <Link to="/categorias">Categorías</Link>
            </li>
            <li className="menu">
             <Link to="/contactos">Contactos</Link>
            </li>
        </ul>
        <SearchBar onSearch={searchMovies} />
      </header>
      <main id='main'>
        <Routes>
          <Route path="/" element={<Inicio />}/>
          <Route path="/estrenos" element={<Estrenos />}/>
          <Route path="/categorias" element={<Categorias />}/>
          <Route path="/contactos" element={<Contactos />}/>
        </Routes>
        <MovieList movies={movies} notFound={notFound} />
      </main>
    </div>
    </BrowserRouter>
  );
}
