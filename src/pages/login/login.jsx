import { useDispatch } from 'react-redux';
import { userLogIn } from 'redux/auth/operations';
import { Formik } from 'formik';
import { StyledField, StyledForm, StyledLabel } from './login.styled';

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = data => {
    dispatch(userLogIn(data));
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{ email: '', password: '' }}
      autoComplete="off"
    >
      <StyledForm>
        <StyledLabel>
          Email
          <StyledField type="email" name="email" />
        </StyledLabel>
        <StyledLabel>
          Password
          <StyledField type="password" name="password" />
        </StyledLabel>
        <button type="submit">Log In</button>
      </StyledForm>
    </Formik>
  );
};
