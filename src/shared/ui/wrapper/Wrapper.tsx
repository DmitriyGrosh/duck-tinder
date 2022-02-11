import React, { FC } from 'react';

import Header from '../../../features/header';

import './Wrapper.scss';

interface IWrapper {
  isHeader: boolean;
  className?: string;
}

const Wrapper: FC<IWrapper> = ({ children, isHeader, className }) => (
  <div className={className ? `wrapper ${className}` : 'wrapper'}>
    {isHeader && <Header />}
    {children}
  </div>
);

export default Wrapper;
