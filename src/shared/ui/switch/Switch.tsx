import React, { FC } from 'react';

import './Switch.scss';

interface ISwitch {
  isStart: boolean;
  onClick: () => void;
}

const Switch: FC<ISwitch> = ({ isStart, onClick, children }) => {
  return (
    <div
      className={
        isStart ? 'switch-container switch-container-start' : 'switch-container'
      }
    >
      <label className="switch">
        <input onChange={onClick} type="checkbox" />
        <span className="slider round" />
      </label>
      {children}
    </div>
  );
};

export default Switch;
