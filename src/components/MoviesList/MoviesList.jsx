import React from 'react';
import PropTypes from 'prop-types';
import * as s from './MoviesList.styled';
import { useLocation } from 'react-router-dom';


const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <s.Ul>
      {movies.map(({ id, poster_path, title }) => (
        <s.Li key={id}>
          <s.Link to={`/movies/${id}`} state={{ from: location }}>
            <s.Img
              src={
                poster_path && `https://image.tmdb.org/t/p/w500/${poster_path}`
              }
              alt={title}
              width="200"
              height="240"
            />
            <s.Title>{title}</s.Title>
          </s.Link>
        </s.Li>
      ))}
    </s.Ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MoviesList;
