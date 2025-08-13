
import '../App.css';
import personita from '../assets/personita.jpg'

export default function MovieList({ movies, notFound }) {
  if (!movies || (notFound)) {
    return (
      <main className='main'>
        <div className='img-contsinresult'>
          <img className='img-sinresult' src={personita} alt=''/>
          <p className='tx-sty'>Busca la película que desees ver. </p>
          <p className='tx-sty'>  Si no la tenemos, la buscamos. Si la tenemos, gózalo.</p>
        </div>
      </main>

    );
  }

  return (
    <div className="movies-container">
      {movies.map((movie) => (
        <div key={movie.imdbID} className='movie-card'>
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
            alt={movie.Title}
          />
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
}



