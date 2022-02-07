import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';

import List from '../../../shared/ui/list';
import Block from '../../../shared/ui/block';
import UserContainer from '../../../shared/ui/userContainer';

import './SocialNetworks.scss';

const SocialNetworks = () => {
  return (
    <UserContainer className="academy" line>
      <List header="Social Network">
        <div className="add">
          <FontAwesomeIcon className="check" icon={faPlus} size="lg" />
        </div>
        <div className="edit">
          <FontAwesomeIcon icon={faPen} size="lg" />
        </div>
      </List>
      <div>
      </div>
    </UserContainer>
  );
};

export default SocialNetworks;
