import React from 'react';

import MainInfo from '../../features/userInformation/mainInfo';
import PersonalDetail from '../../features/userInformation/personalDetail';
import Academy from '../../features/userInformation/academy';
import SocialNetworks from '../../features/userInformation/socialNetworks';

import './User.scss';

export interface IUserResponse {
  email: string;
  id: string;
  isPhoto: boolean;
  name: string;
}

const User = () => {
  return (
    <div className="user">
      <MainInfo />
      <div className="flex-line">
        <PersonalDetail />
        <Academy />
        <SocialNetworks />
        <div></div>
      </div>
    </div>
  );
};

export default User;
