import React, { FC, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import Wrapper from '../wrapper/Wrapper';
import { useAppDispatch } from '../../redux/hooks';
import { saveUser } from '../../redux/actions/user';
import { IUser } from '../../redux/reducers/user';

const AuthContainer: FC = ({ children }) => {
  const [pending, setPending] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const payload: IUser = {
          errors: null,
          authToken: user.refreshToken,
          email: user.email,
          name: user.uid,
        };

        dispatch(saveUser(payload));
        setPending(false);
      } else {
        setPending(false);
      }
    });
  }, []);

  if (pending) {
    return <>Loading...</>;
  }

  return <Wrapper>{children}</Wrapper>;
};

export default AuthContainer;
