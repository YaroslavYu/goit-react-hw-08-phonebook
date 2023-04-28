import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getContacts } from 'redux/contacts/operations';

import { StyledAppContainer, Title } from './phonebook.styled';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { Route, Routes } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';

import { Navigation } from './Navigation/Navigation';
import { Register } from 'pages/register/register';
import { Login } from 'pages/login/login';
import { Contacts } from 'pages/contacts/contacts';
import { userRefresh } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';

import { PATH_TO } from 'common/pathes';

// export const App1 = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getContacts());
//   }, [dispatch]);

//   return (
//     <StyledAppContainer>
//       <Title>Phonebook</Title>
//       <ContactForm />

//       <Title>Contacts</Title>
//       <Filter />

//       <ContactList />
//     </StyledAppContainer>
//   );
// };

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(userRefresh());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Refreshing</div>
  ) : (
    <div>
      <Routes>
        <Route path={PATH_TO.HOME} element={<Navigation />}>
          {/* <Route path={PATH_TO.REGISTER} element={<Register />} />

          <Route path={PATH_TO.LOGIN} element={<Login />} /> */}
          {/* <Route path={PATH_TO.CONTACTS} element={<Contacts />} /> */}
          {/* <Route path={PATH_TO.CONTACTS} element={<Contacts />} /> */}
          <Route
            path={PATH_TO.REGISTER}
            element={
              <RestrictedRoute
                redirectTo={PATH_TO.CONTACTS}
                component={<Register />}
              />
            }
          />
          <Route
            path={PATH_TO.LOGIN}
            element={
              <RestrictedRoute
                redirectTo={PATH_TO.CONTACTS}
                component={<Login />}
              />
            }
          />

          <Route
            path={PATH_TO.CONTACTS}
            element={
              <PrivateRoute
                redirectTo={PATH_TO.LOGIN}
                component={<Contacts />}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
