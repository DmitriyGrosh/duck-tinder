import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';

import List from '../../../shared/ui/list';
import UserContainer from '../../../shared/ui/userContainer';

import facebook from '../../../assets/facebook-svgrepo-com.svg';
import youtube from '../../../assets/youtube-svgrepo-com.svg';
import instagram from '../../../assets/instagram-svgrepo-com.svg';
import vk from '../../../assets/vk-svgrepo-com.svg';

import './SocialNetworks.scss';

const SocialNetworks = () => {
  const isConnect = false;
  return (
    <UserContainer className="social-networks" line>
      <List header="Social Network">
        <div className="add">
          <FontAwesomeIcon className="check" icon={faPlus} size="lg" />
        </div>
        <div className="edit">
          <FontAwesomeIcon icon={faPen} size="lg" />
        </div>
      </List>
      <div className="images">
        <div className="check-connect">
          <img src={facebook} alt="facebook" />
          {isConnect ? (
            <span className="connected">connected</span>
          ) : (
            <span className="disconnected">disconnected</span>
          )}
        </div>
        <div className="check-connect">
          <img src={youtube} alt="youtube" />
          {isConnect ? (
            <span className="connected">connected</span>
          ) : (
            <span className="disconnected">disconnected</span>
          )}
        </div>
        <div className="check-connect">
          <img src={vk} alt="vk" />
          {isConnect ? (
            <span className="connected">connected</span>
          ) : (
            <span className="disconnected">disconnected</span>
          )}
        </div>
        <div className="check-connect">
          <img src={instagram} alt="instagram" />
          {isConnect ? (
            <span className="connected">connected</span>
          ) : (
            <span className="disconnected">disconnected</span>
          )}
        </div>
      </div>
    </UserContainer>
  );
};

export default SocialNetworks;
