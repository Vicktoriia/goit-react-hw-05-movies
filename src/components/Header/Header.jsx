import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import * as s from './Header.styled';
import Loader from 'components/Loader/Loader';

const Header = () => {
  return (
    <s.Container>
      <s.Header>
        <s.Nav>
          <s.Ul>
            <s.Li>
              <s.Link to="/" end>
                Home
              </s.Link>
            </s.Li>
            <s.Li>
              <s.Link to="/movies">Movies</s.Link>
            </s.Li>
          </s.Ul>
        </s.Nav>
      </s.Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </s.Container>
  );
};

export default Header;
