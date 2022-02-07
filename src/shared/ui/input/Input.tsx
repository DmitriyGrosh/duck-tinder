import React, { ChangeEvent, FC, FocusEvent } from 'react';

import './Input.scss';

interface IInput {
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

const Input: FC<IInput> = ({
  type,
  onChange,
  disabled,
  className,
  placeholder,
  onBlur,
  ...attrs
}) => {
  return (
    <input
      {...attrs}
      className={`input-default ${className}`}
      type={type}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
      onBlur={onBlur}
    />
  );
};

Input.displayName = 'Input';

export default Input;
