import React, { FC } from 'react';

import Header from '../header';

import './Wrapper.scss';

interface IWrapper {
  isHeader: boolean;
  className?: string;
}

const Wrapper: FC<IWrapper> = ({ children, isHeader, className }) => (
  <div className={`wrapper ${className}`}>
    {isHeader && <Header />}
    {children}
  </div>
);

export default Wrapper;
