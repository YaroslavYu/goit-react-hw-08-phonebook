import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

import { StyledAppContainer, Title } from './contacts.styled';

export const Contacts = () => {
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
