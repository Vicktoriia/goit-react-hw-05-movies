import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import Header from './Header/Header';

const Home = lazy(() => import('../Page/HomePage//Home'));
const Movies = lazy(() => import('../Page/Movies/Movies'));
const MovieDetails = lazy(() => import('../Page/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
