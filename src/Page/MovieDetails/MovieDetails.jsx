import { useParams, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as s from './MovieDetails.styled';

import { GetMovieDetails } from 'components/Fetch/FetchApi';
import MovieNav from 'components/MovieNav/MovieNav';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [movieInfo, setMovieInfo] = useState();
  const backLink = location.state?.from ?? '/';

  useEffect(() => {
    GetMovieDetails(movieId).then(setMovieInfo);
  }, [movieId]);

  if (!movieInfo) {
    return null;
  }
  const releaseDate = movieInfo.release_date;
  let date = new Date(releaseDate);

  const handleBackClick = () => navigate(backLink);

  const { original_title, overview, vote_average, genres, poster_path } =
    movieInfo;

  return (
    <main>
      <div>
        <s.Button type="button" onClick={handleBackClick}>
          Go back
        </s.Button>
        <s.Div>
          <img
            src={'https://image.tmdb.org/t/p/w500' + poster_path}
            alt={original_title}
            width={250}
          />
          <div>
            <h2>
              {original_title} ({date.getFullYear()})
            </h2>
            <p>User Score: {vote_average}</p>
            <b>Overview:</b>
            <p>{overview}</p>
            <b>Genres:</b>
            <p>{genres.map(({ name }) => name).join(', ')}</p>
          </div>
        </s.Div>
        <div>
          <h3>Additional information</h3>
          <MovieNav from={backLink} />
        </div>
        <Outlet />
      </div>
    </main>
  );
};

export default MovieDetails;
