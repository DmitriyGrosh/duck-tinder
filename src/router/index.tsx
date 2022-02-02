import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PrivateRouter from './privateRouter';
import Main from '../views/main';
import Auth from '../views/auth';
import User from '../views/user';

import { handleRegister } from '../firebase/register';
import { handleLogin } from '../firebase/login';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRouter />}>
        <Route path="/" element={<Main />} />
      </Route>
      <Route path="/user" element={<PrivateRouter />}>
        <Route path="/user" element={<User />} />
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
        element={
          <Auth
            callback={(email, password, dispatch, name) =>
              handleRegister(email, password, dispatch, name)
            }
            isLogin={false}
          />
        }
      />
      <Route path="/login" element={<Auth callback={handleLogin} isLogin />} />
    </Routes>
  );
};

export default Router;
