import React, { FC, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import Wrapper from '../../shared/ui/wrapper';
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
        console.log('==========>user', user);
        const payload: IUser = {
          id: user.uid,
          errors: null,
          authToken: user.refreshToken,
          email: user.email,
          name: user.displayName,
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

  return <Wrapper isHeader>{children}</Wrapper>;
};

AuthContainer.displayName = 'Auth Container';

export default AuthContainer;
