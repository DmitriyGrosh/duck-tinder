import React, { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../../firebase/firebase';

import { useAppSelector } from '../../../redux/hooks';

import { IUserResponse } from '../../../views/user/User';

import Spinner from '../spinner/Spinner';

import './UserAvatar.scss';

interface IUserAvatar {
  image: string | null;
  setLocalPhoto: Dispatch<SetStateAction<string | null>>;
  setIsPending: Dispatch<SetStateAction<boolean>>;
  isPending: boolean;
}

const UserAvatar: FC<IUserAvatar> = ({
  image,
  setIsPending,
  isPending,
  setLocalPhoto,
}) => {
  const { name, id } = useAppSelector((state) => state.user);

  const citiesRef = collection(db, 'users');
  const queryAvatar = query(citiesRef, where('id', '==', id));

  const initialData = async () => {
    setIsPending(true);
    const querySnapshot = await getDocs(queryAvatar);
    querySnapshot.forEach((doc) => {
      const userData = doc.data() as IUserResponse;
      if (userData.isPhoto) {
        getDownloadURL(ref(storage, `users/${id}.png`)).then((url) => {
          setIsPending(false);
          setLocalPhoto(url);
        });
      } else {
        setIsPending(false);
      }
    });
  };

  useEffect(() => {
    initialData();
  }, []);

  return (
    <div className="user-avatar-container">
      {isPending ? (
        <Spinner />
      ) : (
        <div className="user-avatar">
          {!image ? (
            <div className="default">
              <div className="avatar">{name?.slice(0, 1)}</div>
            </div>
          ) : (
            <img src={image} alt="user logo" />
          )}
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
