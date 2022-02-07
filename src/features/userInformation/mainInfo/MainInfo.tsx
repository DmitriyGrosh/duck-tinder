import React, { ChangeEvent, useState } from 'react';
import { ref, uploadBytes } from 'firebase/storage';
import { doc, updateDoc } from 'firebase/firestore';

import UserAvatar from '../../../shared/ui/userAvatar';
import InputFile from '../../../shared/ui/inputFile/InputFile';
import UserContainer from '../../../shared/ui/userContainer';

import { useAppSelector } from '../../../redux/hooks';
import { db, storage } from '../../../firebase/firebase';

const MainInfo = () => {
  const user = useAppSelector((state) => state.user);

  const [localPhoto, setLocalPhoto] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);

  const handleSetImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const file = e.target.files[0];
      const storageRef = ref(storage, `users/${user.id}.png`);
      setIsPending(true);

      uploadBytes(storageRef, file).then(() => {
        const washingtonRef = doc(db, 'users', user.id as string);

        updateDoc(washingtonRef, {
          isPhoto: true,
        });
        setLocalPhoto(URL.createObjectURL(file));
        setIsPending(false);
      });
    }
  };

  return (
    <UserContainer line={false}>
      <div className="flex-line">
        <UserAvatar
          image={localPhoto}
          setLocalPhoto={setLocalPhoto}
          setIsPending={setIsPending}
          isPending={isPending}
        />
        <div className="flex-column">
          <h3>{user.name}</h3>
          <span>{user.email}</span>
          <InputFile onChange={handleSetImage}>Upload image</InputFile>
        </div>
      </div>
    </UserContainer>
  );
};

export default MainInfo;
