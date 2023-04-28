// import { useState } from 'react';
// import { StyledListItem } from './Contact.styled';
// import { deleteContact } from 'redux/contacts/operations';
// import { useSelector, useDispatch } from 'react-redux';

// import { EditContactForm } from 'components/EditContactForm/EditContactForm';

// export const Contact = ({ contact: { name, number, id } }) => {
//   const [isShowEditModal, setIsShowEditModal] = useState(false);
//   // const [editModalContactId, setEditModalContactId] = useState(null);

//   const dispatch = useDispatch();

//   // const isLoadindg = useSelector(selectIsLoadind);
//   // const isError = useSelector(selectError);
//   // const filteredContacts = useSelector(selectFilteredContacts);

//   // useEffect(() => {
//   //   dispatch(getContacts());
//   // }, [dispatch]);

//   const toggleModal = () => {
//     // console.log(isShowEditModal);
//     //   setEditModalContactId(idContact);
//     setIsShowEditModal(prevState => !prevState);
//     // console.log(isShowEditModal);
//   };

//   return (
//     <StyledListItem>
//       {!isShowEditModal && (
//         <>
//           <span>
//             {name} - {number}
//           </span>
//           <div>
//             <button type="button" onClick={toggleModal}>
//               Change
//             </button>

//             <button type="button" onClick={() => dispatch(deleteContact(id))}>
//               Delete
//             </button>
//           </div>
//         </>
//       )}
//       {isShowEditModal && <EditContactForm name={name} number={number} />}
//     </StyledListItem>
//   );
// };

// // () => toggleModal()
// // () => dispatch(deleteContact(id))

// // export const EditContactForm = () => {
// //   return <div>edit</div>;
// // };
