import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import AuthContainer from '../features/authContainer';
import Router from '../router';

import store from '../redux';

import './App.css';

const App: FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthContainer>
          <Router />
        </AuthContainer>
      </BrowserRouter>
    </Provider>
  );
};

App.displayName = 'App';

export default App;
