import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContacts } from 'redux/contacts/operations';
import {
  selectFilteredContacts,
  selectIsLoadind,
  selectError,
} from 'redux/contacts/selectors';
import { useEffect } from 'react';

import { StyledListItem } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();

  const isLoadindg = useSelector(selectIsLoadind);
  const isError = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      {isLoadindg && <div>Loading phonebook...</div>}
      {isError && (
        <div style={{ color: 'red' }}>Something wrong. Pleas, try again</div>
      )}
      {!isLoadindg && !isError && (
        <ul>
          {filteredContacts.map(({ id, name, number }) => {
            return (
              <StyledListItem key={id}>
                <span>
                  {name} - {number}
                </span>
                <div>
                  <button
                    type="button"
                    onClick={() => dispatch(deleteContact(id))}
                  >
                    Delete
                  </button>
                </div>
              </StyledListItem>
            );
          })}
        </ul>
      )}
    </>
  );
};
