import { useDispatch, useSelector } from 'react-redux';
import { userLogOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

import {
  StyledUserContainer,
  StyledUserEmail,
  StyledButton,
} from './UserMenu.styled';
export const UserMenu = () => {
  const { email } = useSelector(selectUser);
  const dispatch = useDispatch();
  // console.log(user);
  return (
    <StyledUserContainer>
      <StyledUserEmail>{email}</StyledUserEmail>
      <StyledButton type="button" onClick={() => dispatch(userLogOut())}>
        Logout
      </StyledButton>
    </StyledUserContainer>
  );
};
