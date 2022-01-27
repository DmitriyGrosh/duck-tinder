import React, {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useState,
  useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import './Auth.scss';

interface IAuth {
  callback: (email: string, password: string, dispatch: Dispatch<any>) => void;
}

interface IErrors {
  email: string;
  password: string;
}

const Auth: FC<IAuth> = ({ callback }) => {
  const navigate = useNavigate();
  const error = useAppSelector((state) => state.user.errors);
  const dispatch = useAppDispatch();

  const [isNavigate, setIsNavigate] = useState<number>(0);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState<IErrors>({
    email: '',
    password: '',
  });

  const passwordRegExp =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  const emailRegExp =
    // eslint-disable-next-line max-len
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleChangeData = (
    event: ChangeEvent<HTMLInputElement>,
    set: Dispatch<SetStateAction<string>>
  ) => {
    set(event.target.value);
  };

  const handleSubmit = async () => {
    if (!!errors.email && !!errors.password) {
      if (errors.email === 'valid' && errors.password === 'valid') {
        await callback(email, password, dispatch);
        setIsNavigate((prev) => prev + 1);
      }
    } else {
      if (!errors.email)
        setErrors((prevErrors) => ({ ...prevErrors, email: 'invalid' }));

      if (!errors.password)
        setErrors((prevErrors) => ({ ...prevErrors, password: 'invalid' }));
    }
  };

  const handleValidate = (
    e: React.FocusEvent<HTMLInputElement>,
    matcher: RegExp,
    type: string
  ) => {
    const isValidData = e.target.value.match(matcher)?.length;

    if (isValidData) {
      setErrors((prevErrors) => ({ ...prevErrors, [type]: 'valid' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [type]: 'invalid' }));
    }
  };

  const toErrorString = (): string => {
    let result = '';
    console.log('==========>error', error);

    if (error?.includes('password')) result = 'Invalid password';
    if (error?.includes('email')) result = 'Invalid email';
    if (error?.includes('user')) result = 'User not found';

    return result;
  };

  useEffect(() => {
    if (error === null && isNavigate > 0) {
      navigate('/');
    }
  }, [isNavigate]);

  return (
    <div className="auth-container">
      <div className="form-container">
        <Input
          placeholder="email"
          onChange={(e) => handleChangeData(e, setEmail)}
          type="email"
          onBlur={(e) => handleValidate(e, emailRegExp, 'email')}
          className={errors.email === 'invalid' ? 'invalid' : ''}
        />
        <Input
          placeholder="password"
          onChange={(e) => handleChangeData(e, setPassword)}
          type="password"
          onBlur={(e) => handleValidate(e, passwordRegExp, 'password')}
          className={errors.password === 'invalid' ? 'invalid' : ''}
        />
      </div>
      <Button onClick={handleSubmit}>Login</Button>
      <div className="errors">{toErrorString()}</div>
    </div>
  );
};

export default Auth;
