import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { IUser } from '../redux/reducers/user';
import { asyncSaveUser } from '../redux/actions/user';
import { Dispatch } from 'react';

export const handleRegister = async (
  email: string,
  password: string,
  dispatch: Dispatch<any>
) => {
  const auth = getAuth();
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const { user } = userCredential;

      const payload: IUser = {
        errors: null,
        name: user.uid,
        email: user.email,
        authToken: user.uid,
      };

      dispatch(asyncSaveUser(payload));
    })
    .catch((error) => {
      const errorMessage = error.message;

      const payload: IUser = {
        authToken: null,
        name: null,
        email: null,
        errors: errorMessage,
      };

      dispatch(asyncSaveUser(payload));
    });
};
