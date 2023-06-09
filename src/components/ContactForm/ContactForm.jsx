import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { StyledField, StyledForm, StyledError } from './ContactForm.styled';

const initialValues = {
  name: '',
  number: '',
};

// const phoneRegEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

// const phoneRegEx = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object({
  name: yup.string().required(),
  number: yup.number('phone number is not valid').required(),
});

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const checkContactIsAdded = newContact => {
    const nameContact = newContact.name.trim().toUpperCase();
    const findContact = contacts.find(
      ({ name }) => name.trim().toUpperCase() === nameContact
    );
    if (findContact) {
      return true;
    } else return false;
  };

  const addCheckedContact = (newContact, actions) => {
    const isAddedBefore = checkContactIsAdded(newContact, contacts);
    if (isAddedBefore) {
      alert('contact be already added before');
      return;
    }

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      onSubmit={addCheckedContact}
      initialValues={initialValues}
      validationSchema={schema}
    >
      <StyledForm>
        <label htmlFor="name">
          <div>Name</div>
          <StyledField
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component={StyledError} />
        </label>
        <label htmlFor="phone">
          <div>Phone number</div>
          <StyledField
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage
            name="number"
            component={StyledError}
            // render={msg => <StyledError>{msg}</StyledError>}
          />
        </label>
        <button type="submit">Add contact</button>
      </StyledForm>
    </Formik>
  );
};
