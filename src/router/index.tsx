import React from 'react';
import { Route, Routes } from 'react-router-dom';

import PrivateRouter from './privateRouter';
import Main from '../views/main';
import Auth from '../views/auth';

import { handleRegister } from '../firebase/register';
import { handleLogin } from '../firebase/login';

const Router = () => {
  return (
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
        element={<Auth callback={handleRegister} isLogin={false} />}
      />
      <Route path="/login" element={<Auth callback={handleLogin} isLogin />} />
    </Routes>
  );
};

export default Router;
