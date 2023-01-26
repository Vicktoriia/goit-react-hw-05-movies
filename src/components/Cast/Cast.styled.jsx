import styled from 'styled-components';

export const Div = styled.div`
  padding: 20px;
  margin: 0 auto;
  max-width: 1280px;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gridGap: 10;
`;
export const Li = styled.li`
  list-style: none;
  padding: 5px;
  max-width: 200px;
`;
export const Img = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 5px;
`;
export const Descr = styled.div`
  padding-top: 8px;
  width: 200px;
`;

export const P = styled.p`
  margin: 0 0 10px 0;
  font-size: 18px;
`;
export const Character = styled.p`
  margin: 0;
  font-size: 18px;
`;
