import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { handleLogout } from '../../firebase/logout';

import './Header.scss';
import {
  useLocalStorage,
  switchTheme,
} from '../../shared/hooks/useLocalStorage';

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.user.authToken);
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  return (
    <div data-theme={theme} className="header">
      <button onClick={() => switchTheme(theme, setTheme)}>
        Switch to {theme !== 'light' ? 'Light' : 'Dark'}
      </button>
      <div className="header-container">
        {!isAuth ? (
          <div className="auth">
            <NavLink className="link" to="register">
              Sign in
            </NavLink>
            <NavLink className="link" to="login">
              Login
            </NavLink>
          </div>
        ) : (
          <>
            <div className="basic">
              <NavLink className="link" to="user">
                User
              </NavLink>
              <NavLink className="link" to="/">
                Home
              </NavLink>
            </div>
            <NavLink
              onClick={() => handleLogout(dispatch)}
              className="link"
              to="logout"
            >
              Log out
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
