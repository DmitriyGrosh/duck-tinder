import React, { ChangeEvent, FC } from 'react';

import './InputFile.scss';

interface IInputFile {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputFile: FC<IInputFile> = ({ onChange, children }) => {
  return (
    <div className="input-file">
      <label>{children}</label>
      <input onChange={onChange} type="file" />
    </div>
  );
};

export default InputFile;
