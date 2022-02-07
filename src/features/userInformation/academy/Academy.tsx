import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';

import List from '../../../shared/ui/list';
import UserContainer from '../../../shared/ui/userContainer';
import Block from '../../../shared/ui/block';

import './Academy.scss';

const Academy = () => {
  return (
    <UserContainer className="academy" line>
      <List header="Academy">
        <div className="add">
          <FontAwesomeIcon className="check" icon={faPlus} size="lg" />
        </div>
        <div className="edit">
          <FontAwesomeIcon icon={faPen} size="lg" />
        </div>
      </List>
      <Block title="Masters" content="Vision institute of pharmacy" />
      <Block title="Masters" content="Vision institute of pharmacy" />
      <Block title="Masters" content="Vision institute of pharmacy" />
      <Block title="Masters" content="Vision institute of pharmacy" />
    </UserContainer>
  );
};

export default Academy;
