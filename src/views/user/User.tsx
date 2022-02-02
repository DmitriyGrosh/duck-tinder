import React, { ChangeEvent, useState } from 'react';
import { ref, uploadBytes } from 'firebase/storage';
import { doc, updateDoc } from 'firebase/firestore';

import InputFile from '../../components/inputFile/InputFile';
import UserAvatar from '../../components/UserAvatar/UserAvatar';

import { useAppSelector } from '../../redux/hooks';
import { storage, db } from '../../firebase/firebase';

import './User.scss';

export interface IUserResponse {
  email: string;
  id: string;
  isPhoto: boolean;
  name: string;
}

const User = () => {
  const uid = useAppSelector((state) => state.user.id);
  const [localPhoto, setLocalPhoto] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const handleSetImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const file = e.target.files[0];
      const storageRef = ref(storage, `users/${uid}.png`);
      setIsPending(true);

      uploadBytes(storageRef, file).then((snapshot) => {
        const washingtonRef = doc(db, 'users', uid as string);

        updateDoc(washingtonRef, {
          isPhoto: true,
        });
        setLocalPhoto(URL.createObjectURL(file));
        setIsPending(false);
      });
    }
  };

  return (
    <div className="user">
      <div className="left-side">
        <UserAvatar
          setIsPending={setIsPending}
          isPending={isPending}
          setLocalPhoto={setLocalPhoto}
          image={localPhoto}
        />
        <InputFile onChange={handleSetImage}>Uload file</InputFile>
      </div>
      <div className="right-side">
        <div>asddsa</div>
      </div>
    </div>
  );
};

export default User;
