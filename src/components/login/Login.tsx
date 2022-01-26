import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch } from '../../redux/hooks';
import { saveUser } from '../../redux/actions/user';

import { IUser } from '../../redux/reducers/user';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleChangeData = (
    event: ChangeEvent<HTMLInputElement>,
    set: Dispatch<SetStateAction<string>>
  ) => {
    set(event.target.value);
  };

  const handleSubmit = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;

        const payload: IUser = {
          authToken: user.refreshToken,
          name: user.uid,
          email: user.email,
        };

        dispatch(saveUser(payload));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log('==========>errorCode', errorCode);
        console.log('==========>errorMessage', errorMessage);
      });
  };
  return (
    <div>
      <input onChange={(e) => handleChangeData(e, setEmail)} type="email" />
      <input
        onChange={(e) => handleChangeData(e, setPassword)}
        type="password"
      />

      <button onClick={handleSubmit}>Send</button>
    </div>
  );
};

export default Login;
