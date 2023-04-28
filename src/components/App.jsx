import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { userRefresh } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';

import { PATH_TO } from 'common/pathes';

import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

import { Navigation } from './Navigation/Navigation';
import { Login } from 'pages/Login/Login';
import { Contacts } from 'pages/Contacts/Contacts';
import { Home } from 'pages/Home/Home';
import { Register } from 'pages/Register/Register';

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
          <Route index element={<Home />} />

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
