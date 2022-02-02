import React, { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../firebase/firebase';

import { useAppSelector } from '../../redux/hooks';

import { IUserResponse } from '../../views/user/User';

import './UserAvatar.scss';
import Spinner from '../spinner/Spinner';

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
        getDownloadURL(ref(storage, `users/${id}.png`))
          .then((url) => {
            console.log('==========>url', url);
            setIsPending(false);
            setLocalPhoto(url);
          })
          .catch((e) => {
            setIsPending(false);
            console.log('==========>e', e);
          });
      } else {
        setIsPending(false);
      }
    });
  };

  useEffect(() => {
    initialData();
  }, []);

  console.log('==========>render');
  return (
    <div>
      {isPending ? (
        <Spinner />
      ) : (
        <div className="user-avatar">
          {!image ? (
            <div className="default">
              <div className="avatar">{name}</div>
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
