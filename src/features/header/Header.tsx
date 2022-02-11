import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { handleLogout } from '../../firebase/logout';

import Switch from '../../shared/ui/switch';
import { switchTheme } from '../../shared/hooks/useLocalStorage';

import './Header.scss';

interface IHeader {
  theme: string;
  setTheme: (value: string) => void;
}

const Header: FC<IHeader> = ({ theme, setTheme }) => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.user.authToken);

  return (
    <div className="header">
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
            <div className="second">
              <Switch
                isActive={theme === 'light'}
                isStart={false}
                onClick={() => switchTheme(theme, setTheme)}
              >
                <FontAwesomeIcon
                  icon={theme === 'light' ? faSun : faMoon}
                  size="lg"
                />
              </Switch>
              <NavLink
                onClick={() => handleLogout(dispatch)}
                className="link"
                to="logout"
              >
                Log out
              </NavLink>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
