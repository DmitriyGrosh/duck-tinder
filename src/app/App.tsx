import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import AuthContainer from '../components/authContainer';
import Router from '../router';

import store from '../redux';

import './App.css';

const App: FC = () => {
  return (
    <Provider store={store}>
      <AuthContainer>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthContainer>
    </Provider>
  );
};

App.displayName = 'App';

export default App;
