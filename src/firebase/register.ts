import { setDoc, doc } from '@firebase/firestore';
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from 'firebase/auth';
import { IUser } from '../redux/reducers/user';
import { asyncSaveUser } from '../redux/actions/user';
import { Dispatch } from 'react';
import { db } from './firebase';

export const handleRegister = async (
  email: string,
  password: string,
  dispatch: Dispatch<any>,
  name?: string
) => {
  const auth = getAuth();
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const { user } = userCredential;
      updateProfile(user, {
        displayName: name,
      });

      const payload: IUser = {
        errors: null,
        name: name!,
        email: user.email,
        authToken: user.uid,
        id: user.uid,
      };

      setDoc(doc(db, 'users', user.uid), {
        name,
        email: user.email,
        id: user.uid,
      });

      dispatch(asyncSaveUser(payload));
    })
    .catch((error) => {
      const errorMessage = error.message;

      const payload: IUser = {
        id: null,
        authToken: null,
        name: null,
        email: null,
        errors: errorMessage,
      };

      dispatch(asyncSaveUser(payload));
    });
};
