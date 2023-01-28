import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  font-size: 20px;
  color: #010101;
  margin-top: 20px;
  border-bottom: 1px solid black;
`;

export const Button = styled.button`
  margin-top: 20px;
  font-size: 18px;
  padding: 10px 10px;
  border-radius: 5px;
  border: 1px solid #fff;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  text-transform: uppercase;
  color: cornflowerblue;
  font-weight: 500;
  background: #cfe0e8;
  :hover,
  :focus {
    color: red;
    transition: color 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
