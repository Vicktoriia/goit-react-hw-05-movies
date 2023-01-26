import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { GetMovieReviews } from 'components/Fetch/FetchApi';
import * as s from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    GetMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  if (!reviews) {
    return null;
  }

  return (
    <>
      {reviews.length > 0 ? (
        <s.UlReviews>
          {reviews.map(({ id, author, content }) => (
            <s.ReviewLi key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </s.ReviewLi>
          ))}
        </s.UlReviews>
      ) : (
        <h3>We don't have reviews for this movie</h3>
      )}
    </>
  );
};

export default Reviews;
