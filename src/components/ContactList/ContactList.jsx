import { useSelector, useDispatch } from 'react-redux';
import { StyledListItem } from './ContactList.styled';
import { deleteContact } from 'redux/contacts/operations';
import {
  selectFilteredContacts,
  selectIsLoadind,
  selectError,
} from 'redux/contacts/selectors';

import { useEffect, useState } from 'react';

import { getContacts } from 'redux/contacts/operations';
// import { Contact } from 'components/Contact/Contact';

// import { EditContactForm } from 'components/EditContactForm/EditContactForm';
// import {Ed}
// import { EditContactForm } from 'components/EditContactForm/EditContactForm';

// import {
//   selectFilteredContacts,
// selectIsLoadind,
// selectError,
// } from "../"

// import { EditContactForm } from '../EditContactForm';
// import { EditContactForm } from 'components/EditContactForm/EditContactForm';

export const ContactList = () => {
  // const [isShowEditModal, setIsShowEditModal] = useState(false);
  // const [editModalContactId, setEditModalContactId] = useState(null);

  const dispatch = useDispatch();

  const isLoadindg = useSelector(selectIsLoadind);
  const isError = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  // const openModal = idContact => {
  //   // console.log(isShowEditModal);
  //   setEditModalContactId(idContact);
  //   setIsShowEditModal(true);
  //   // console.log(isShowEditModal);
  // };

  return (
    <>
      {/* <div>Contacts list</div> */}
      {isLoadindg && <div>Loading phonebook...</div>}
      {isError && (
        <div style={{ color: 'red' }}>Something wrong. Pleas, try again</div>
      )}
      {!isLoadindg && !isError && (
        // <>
        <ul>
          {filteredContacts.map(({ id, name, number }) => {
            return (
              // <Contact key={contact.id} contact={contact} />
              // <>
              <StyledListItem key={id}>
                {/* {editModalContactId !== id && ( */}
                <>
                  <span>
                    {name} - {number}
                  </span>
                  <div>
                    {/* <button type="button" onClick={() => openModal(id)}>
                            Change
                          </button> */}

                    <button
                      type="button"
                      onClick={() => dispatch(deleteContact(id))}
                    >
                      Delete
                    </button>
                  </div>
                </>
                {/* // )} */}
                {/* {isShowEditModal && editModalContactId === id && (
                    // <form>
                    //   <input
                    //     type="text"
                    //     name="name"
                    //     pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    //     value={name}
                    //     required
                    //   />{' '}
                    //   -
                    //   <input
                    //     type="tel"
                    //     name="number"
                    //     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    //     value={number}
                    //     required
                    //   />
                    // </form>
                  )
                  } */}
              </StyledListItem>
              // </>
            );
          })}
        </ul>
        // </>
      )}
    </>
  );
};
