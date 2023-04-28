import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';
// import css from './RegisterForm.module.css';
import { Formik, Form, Field } from 'formik';
import { userRegister } from 'redux/auth/operations';
import { StyledField, StyledForm, StyledLabel } from './register.styled';

// const test = {
//   name: 'Adrian Cross test',
//   email: 'test_across@mail.com',
//   password: 'examplepwd12345',
// };

export const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data, actions) => {
    //   e.preventDefault();
    //   const form = e.currentTarget;
    // const stringifyData = JSON.stringify(data);
    // console.log(stringifyData);
    dispatch(userRegister(data));
    //   form.reset();
    // console.log(data);
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
