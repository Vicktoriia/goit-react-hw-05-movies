import * as s from './MovieNav.styled';

const MovieNav = ({ from }) => {
  return (
    <s.List>
      <s.Li>
        <s.Link to={`cast`} state={{ from }}>
          Cast
        </s.Link>
      </s.Li>
      <s.Li>
        <s.Link to={`reviews`} state={{ from }}>
          Reviews
        </s.Link>
      </s.Li>
    </s.List>
  );
};

export default MovieNav;
