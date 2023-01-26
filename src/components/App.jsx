import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import Header from './Header/Header';
import * as s from './App.styled';

const Home = lazy(() => import('../Page/HomePage/Home'));


export const App = () => {
  return (
    <s.Div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </s.Div>
  );
};
