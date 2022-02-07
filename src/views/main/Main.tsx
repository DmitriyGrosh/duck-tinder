import React from 'react';

import Sidebar from '../../features/sidebar';

import Wrapper from '../../shared/ui/wrapper';

const Main = () => {
  return (
    <Wrapper className="flexible" isHeader={false}>
      <Sidebar />
    </Wrapper>
  );
};

export default Main;
