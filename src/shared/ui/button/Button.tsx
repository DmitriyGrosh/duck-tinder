import React, { FC, SyntheticEvent } from 'react';

import './Button.scss';

type AButton = 'button' | 'submit' | 'reset';

interface IButton {
  className?: string;
  onClick?: (e: SyntheticEvent) => void;
  type?: AButton;
  disabled?: boolean;
}

const Button: FC<IButton> = ({
  className,
  onClick,
  type,
  disabled,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`button-default ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
