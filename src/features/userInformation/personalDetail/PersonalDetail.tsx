import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';

import UserContainer from '../../../shared/ui/userContainer';
import List from '../../../shared/ui/list';
import Block from '../../../shared/ui/block';

import './PersonalDetail.scss';

const PersonalDetail = () => {
  return (
    <UserContainer className="personal-detail" line>
      <List header="Personal Detail">
        <div className="edit">
          <FontAwesomeIcon icon={faPen} size="lg" />
        </div>
      </List>
      <div className="grid">
        <Block title="Gender" content="Male" />
        <Block title="Date of Birth" content="Male" />
        <Block title="Registered Email" content="Male" />
        <Block title="Permanent Address" content="Male" />
      </div>
    </UserContainer>
  );
};

export default PersonalDetail;
