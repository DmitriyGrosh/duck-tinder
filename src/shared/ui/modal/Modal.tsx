import React, { FC } from 'react';
import { assign } from 'lodash';

import Body from './Body';
import Portal from '../../lib/Portal';

import './Modal.scss';

interface IModal {
  onClose?: () => void;
  size?: string;
}

const Modal: FC<IModal> = ({ onClose, size, children }) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <Portal>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div onClick={handleClose} className="modal">
        <div className="modal-container">{children}</div>
      </div>
    </Portal>
  );
};

export default assign(Modal, { Body });
