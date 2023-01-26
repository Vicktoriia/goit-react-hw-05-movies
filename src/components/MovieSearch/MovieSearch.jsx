import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import * as s from './MovieSearch.styled'

const MovieSearch = ({ query, onSubmit }) => {
  const [queryValue, setQueryValue] = useState(query);

  useEffect(() => {
    if (query === '') {
      setQueryValue(query);
    }
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.currentTarget.query.value);
  };

  const handleQueryChange = e => setQueryValue(e.target.value);

  return (
    <s.Div>
      <s.Form onSubmit={handleSubmit}>
        <s.Input
          type="search"
          name="query"
          value={queryValue}
          onChange={handleQueryChange}
          placeholder="Search movies"
        />
        <s.Button type="submit">Search</s.Button>
      </s.Form>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </s.Div>
  );
};

MovieSearch.propTypes = {
  query: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MovieSearch;
