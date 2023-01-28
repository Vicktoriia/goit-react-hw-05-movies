import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  z-index: 100;
  top: 0;
  width: 100%;
  height: 60px;
  background: linear-gradient(
    90deg,
    rgba(239, 240, 36, 0.8323529240797882) 48%,
    rgba(32, 137, 209, 0.6642856971890319) 64%
  );
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Container = styled.div`
  padding: 20px 24px;
  margin right: auto;
  margin left: auto;
  margin bottom: 20px;
  max-width: 100%;

`;

export const Nav = styled.nav`
  display: flex;
  font-size: 40px;
  margin: 0 auto;
  max-width: 1280px;
  gap: 24px;
`;

export const Ul = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  gap: 24px;
`;
export const Li = styled.li`
  color: #000;
  font-size: 25px;
  list-style: none;
  padding: 13px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: cornflowerblue;
  text-transform: uppercase;
  font-weight: 500;
  &.active {
    color: red;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #7a3b2e;
  }
`;
