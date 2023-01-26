import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Li = styled.li`
  list-style: none;
  width: 200px;
  :hover,
  :focus {
    scale: 1.1;
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const Link = styled(NavLink)`
  font-size: 24px;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  color: #000;
  :hover,
  :focus {
    color: cornflowerblue;
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const Title = styled.p`
  font-weight: 700;
  margin: 0 0 10px 0;
  font-size: 18px;
  text-align: center;
`;

export const Img = styled.img`
  width: 100%;
  height: 300px;
  display: block;
  border-radius: 5px;
`;
