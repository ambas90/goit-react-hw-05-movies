import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FilmLink = styled(Link)`
  font-size: 15px;
  text-decoration: none;
  font-weight: 600;
  color: inherit;

  &:hover {
    background-color: #ff8800;
  }
`;

export const MoviesFormUi = styled.form`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const MoviesFormInput = styled.input`
  width: 250px;
  height: 30px;
  font-size: 15px;
  border-radius: 0px;
  border-width: 2px;
`;

export const MoviesSearchButton = styled.button`
  height: 30px;
  border-radius: 0px;
  border-width: 0px;
  background-color: #ff6200;
  color: white;
  font-size: 15px;

  &:hover {
    background-color: #ff8800;
  }

  &:active {
    background-color: #ff9900;
  }
`;
