import { StyledAppContainer, Title } from './contacts.styled';
// import { ContactForm } from "components/F";
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export const Contacts = () => {
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getContacts());
  //   }, [dispatch]);

  return (
    <>
      <h2>Phonebook</h2>

      <StyledAppContainer>
        <div>
          <Title>Add contact</Title>
          <ContactForm />
        </div>
        <div>
          <Title>Contacts</Title>
          <Filter />

          <ContactList />
        </div>
      </StyledAppContainer>
    </>
  );
};
