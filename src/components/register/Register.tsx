import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch } from '../../redux/hooks';
import { saveUser } from '../../redux/actions/user';
import { IUser } from '../../redux/reducers/user';

const Register = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChangeData = (
    event: ChangeEvent<HTMLInputElement>,
    set: Dispatch<SetStateAction<string>>
  ) => {
    set(event.target.value);
  };

  const handleSubmit = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;

        const payload: IUser = {
          name: user.uid,
          email: user.email,
          authToken: user.uid,
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

export default Register;
