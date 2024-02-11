import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const AppWrapper = styled.div`
  background-color: white;
  max-width: 750px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  padding: 50px;
  border-radius: 15px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin: auto;
`;

export const HeaderLink = styled(NavLink)`
  padding: 5px;
  margin-right: 10px;
  height: 50px;
  border-radius: 0px;
  border-width: 0px;
  background-color: #ff9900;
  color: white;
  font-size: 15px;
  text-decoration: none;

  &:hover {
    background-color: #ff8800;
  }

  &.active {
    background-color: #ff6200;
  }
`;
