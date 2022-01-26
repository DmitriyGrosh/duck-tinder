import { IUser } from '../reducers/user';

export const SAVE_USER = 'SAVE_USER';
export const DELETE_USER = 'DELETE_USER';

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
