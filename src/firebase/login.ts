import { Dispatch } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { IUser } from '../redux/reducers/user';
import { asyncSaveUser } from '../redux/actions/user';

export const handleLogin = async (
  email: string,
  password: string,
  dispatch: Dispatch<any>
) => {
  const auth = getAuth();
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const { user } = userCredential;

      const payload: IUser = {
        authToken: user.refreshToken,
        name: user.uid,
        email: user.email,
        errors: null,
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
