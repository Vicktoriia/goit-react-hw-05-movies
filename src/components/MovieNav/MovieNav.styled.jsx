import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-start;
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
