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
