import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/selectors';
import { PATH_TO } from 'common/pathes';

import { UserMenu } from 'components/UserMenu/UserMenu';
import { StyledNavLink, StyledHeader, StyledNav } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <StyledHeader>
        <StyledNav>
          {!isLoggedIn && (
            <StyledNavLink to={PATH_TO.LOGIN}>LOGIN</StyledNavLink>
          )}
          {!isLoggedIn && (
            <StyledNavLink to={PATH_TO.REGISTER}>REGISTER</StyledNavLink>
          )}
          {isLoggedIn && (
            <StyledNavLink to={PATH_TO.CONTACTS}>CONTACTS</StyledNavLink>
          )}
        </StyledNav>
        {isLoggedIn && <UserMenu />}
      </StyledHeader>
      <Outlet />
    </>
  );
};
