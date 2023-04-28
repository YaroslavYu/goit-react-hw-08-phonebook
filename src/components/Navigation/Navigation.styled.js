import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  cursor: pointer;
  &.active {
    color: red;
  }
  &:hover {
    color: orangered;
    background-color: #cccccc;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #aaaaaa;
  padding: 20px 20px;
  margin-bottom: 20px;
`;

export const StyledNav = styled.nav`
  display: flex;
  column-gap: 30px;
`;
