import React, { FC } from 'react';

import Header from '../header';

import './Wrapper.scss';

const Wrapper: FC = ({ children }) => (
  <div className="wrapper">
    <Header />
    {children}
  </div>
);

export default Wrapper;
