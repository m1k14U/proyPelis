import axios from "axios";
import SearchBar from "./components/searchBar";
import MovieList from "./components/searchMovies";

export default function App() {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (query) => {
    try {
      const res = await axios.get(`https://www.omdbapi.com/`, {
        params: {
          apikey: "f2c66098", 
          s: query
        }
      });

      if (res.data.Response === "True") {
        setMovies(res.data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error buscando películas:", error);
      setMovies([]);
    }
  };

  return (
    <div className="layout">
      <header className="header">
        <p id = "title-cin">CINEstereo</p>
        <ul>
            <li className="menu">
             Inicio
            </li>
            <li className="menu">
              Estrenos
            </li>
            <li className="menu">
              Categorías
            </li>
            <li className="menu">
             Contactos
            </li>
        </ul>
        <SearchBar onSearch={searchMovies} />
      </header>
      <main id='main'>
        <MovieList movies={movies} />
      </main>
    </div>
  );
}
