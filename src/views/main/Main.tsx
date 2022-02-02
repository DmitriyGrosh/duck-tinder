import React from 'react';

import Sidebar from '../../components/sidebar';

import Wrapper from '../../components/wrapper';

const Main = () => {
  return (
    <Wrapper className="flexible" isHeader={false}>
      <Sidebar />
    </Wrapper>
  );
};

export default Main;
