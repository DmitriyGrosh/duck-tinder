import { Dispatch } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { deleteUser, saveUser } from '../redux/actions/user';
import { IUser } from '../redux/reducers/user';

export const handleLogout = (dispatch: Dispatch<any>) => {
  const auth = getAuth();

  signOut(auth)
    .then(() => {
      dispatch(deleteUser());
    })
    .catch((error) => {
      const errorMessage = error.message;

      const payload: IUser = {
        authToken: null,
        name: null,
        email: null,
        errors: errorMessage,
      };

      dispatch(saveUser(payload));
    });
};
