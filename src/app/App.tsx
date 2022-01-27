import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { getAuth, signOut } from 'firebase/auth';

import PrivateRouter from '../router/privateRouter/PrivateRouter';
import AuthContainer from '../components/authContainer/AuthContainer';
import Auth from '../views/auth/Auth';
import { handleLogin } from '../firebase/login';
import { handleRegister } from '../firebase/register';

import store from '../redux';
import { useAppDispatch } from '../redux/hooks';
import { deleteUser } from '../redux/actions/user';

import './App.css';

const Main = () => {
  const auth = getAuth();
  const dispatch = useAppDispatch();

  const setLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch(deleteUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div>
      Welcome
      <button onClick={setLogout}>logout</button>
    </div>
  );
};

const App: FC = () => {
  return (
    <Provider store={store}>
      <AuthContainer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PrivateRouter />}>
              <Route path="/" element={<Main />} />
            </Route>
            <Route path="*" element={<PrivateRouter />}>
              <Route
                path="*"
                element={
                  <main style={{ padding: '1rem' }}>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Route>
            <Route
              path="/register"
              element={<Auth callback={handleRegister} />}
            />
            <Route path="/login" element={<Auth callback={handleLogin} />} />
          </Routes>
        </BrowserRouter>
      </AuthContainer>
    </Provider>
  );
};

App.displayName = 'App';

export default App;
