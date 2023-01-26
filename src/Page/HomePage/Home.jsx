import { useState, useEffect } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import { GetMovieTrending } from 'components/Fetch/FetchApi';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    GetMovieTrending().then(setMovies);
  }, []);

  return (
    <main>
      <div>
        <h1>Trending today</h1>
        <MoviesList movies={movies} />
      </div>
    </main>
  );
};

export default Home;
