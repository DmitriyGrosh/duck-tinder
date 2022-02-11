import React, { FC } from 'react';

import Header from '../../../features/header';

import './Wrapper.scss';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface IWrapper {
  isHeader: boolean;
  className?: string;
}

const Wrapper: FC<IWrapper> = ({ children, isHeader, className }) => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  return (
    <div
      data-theme={theme}
      className={className ? `wrapper ${className}` : 'wrapper'}
    >
      {isHeader && <Header setTheme={setTheme} theme={theme} />}
      {children}
    </div>
  );
};

export default Wrapper;
