import React, { ChangeEvent, useState } from 'react';

import Input from '../../components/input';

const User = () => {
  const [localPhoto, setLocalPhoto] = useState<File>();
  const handleSetImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const file = e.target.files[0];
      setLocalPhoto(file);
    }
  };

  return (
    <>
      <Input type="file" onChange={handleSetImage} />
      {localPhoto && <img src={URL.createObjectURL(localPhoto)} alt="logo" />}
    </>
  );
};

export default User;
