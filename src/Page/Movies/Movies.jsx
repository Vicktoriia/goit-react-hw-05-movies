import { useState } from 'react';

import MovieSearch from 'components/MovieSearch/MovieSearch';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState('');

  return (
    <main>
      <div>
        <MovieSearch setMovies={setMovies} />
        {movies !== '' ? (
          <div>
            <MoviesList movies={movies} />
          </div>
        ) : (
          <p>No movies... Try to find something</p>
        )}

        {movies.length === 0 && movies !== '' && (
          <p>There is no movies with that name</p>
        )}
      </div>
    </main>
  );
};

export default Movies;
