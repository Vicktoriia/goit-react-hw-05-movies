import { GetMovieCast } from '../Fetch/FetchApi';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as s  from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    GetMovieCast(movieId).then(setCast);
  }, [movieId]);

  if (!cast) {
    return null;
  }

  return (
    <s.Div>
      {cast.cast.length > 0 ? (
        <s.Ul>
          {cast.cast.map(({ id, profile_path, name, character }) => (
            <s.Li key={id}>
              <s.Img
                src={
                  profile_path
                    ? 'https://image.tmdb.org/t/p/w500' + profile_path
                    : 'https://dummyimage.com/200x300/858585/fff.jpg&text=No+photo'
                }
                alt={name}
                width="200"
                height="240"
              />
              <s.Descr>
                <s.P>{name}</s.P>
                <s.Character>Character: {character}</s.Character>
              </s.Descr>
            </s.Li>
          ))}
        </s.Ul>
      ) : (
        <p>No cast</p>
      )}
    </s.Div>
  );
};

export default Cast;
