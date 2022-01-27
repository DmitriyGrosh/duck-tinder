import { IUser } from '../reducers/user';

export const SAVE_USER = 'SAVE_USER';
export const DELETE_USER = 'DELETE_USER';
export const ASYNC_SAVE_USER = 'ASYNC_SAVE_USER';
export const ASYNC_DELETE_USER = 'ASYNC_DELETE_USER';

interface ISaveUser {
  email: string;
  password: string;
}

export const asyncSaveUser = (payload: IUser) => {
  return {
    type: ASYNC_SAVE_USER,
    payload,
  };
};

export const saveUser = (payload: IUser) => {
  return {
    type: SAVE_USER,
    payload,
  };
};

export const deleteUser = () => {
  return {
    type: DELETE_USER,
  };
};
