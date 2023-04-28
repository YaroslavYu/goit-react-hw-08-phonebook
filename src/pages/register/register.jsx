import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { userRegister } from 'redux/auth/operations';
import { StyledField, StyledForm, StyledLabel } from './Register.styled';

export const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data, actions) => {
    dispatch(userRegister(data));
    actions.resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{ name: '', email: '', password: '' }}
      autoComplete="off"
    >
      <StyledForm>
        <StyledLabel>
          Username
          <StyledField type="text" name="name" />
        </StyledLabel>
        <StyledLabel>
          Email
          <StyledField type="email" name="email" />
        </StyledLabel>
        <StyledLabel>
          Password
          <StyledField type="password" name="password" />
        </StyledLabel>
        <button type="submit">Register</button>
      </StyledForm>
    </Formik>
  );
};
