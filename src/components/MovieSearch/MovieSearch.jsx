import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import Loader from 'components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import * as s from './MovieSearch.styled';
import { GetSearchMovies } from 'components/Fetch/FetchApi';

const MovieSearch = ({ setMovies }) => {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const movieQuery = searchQuery.get('query') ?? '';

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = form.query.value;

    setSearchQuery({ query });
    form.reset();
  };

  useEffect(() => {
    if (!movieQuery) return;

    async function fetchMovies() {
      const movies = await GetSearchMovies(movieQuery);

      const requiredMovies = movies.map(
        ({ id, title, poster_path, vote_average }) => ({
          id,
          title,
          poster_path,
          vote_average,
        })
      );

      setMovies(requiredMovies);
    }

    fetchMovies();
  }, [movieQuery, setMovies]);

  return (
    <s.Div>
      <s.Form onSubmit={handleSubmit}>
        <s.Input
          type="text"
          name="query"
          placeholder="Search movies"
          autoComplete="off"
          autoFocus
        />
        <s.Button type="submit">Search</s.Button>
      </s.Form>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </s.Div>
  );
};

export default MovieSearch;
