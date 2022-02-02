import { DELETE_USER, SAVE_USER } from '../actions/user';

type InitialType = string | null;

export interface IUser {
  authToken: InitialType;
  id: InitialType;
  email: InitialType;
  name: InitialType;
  errors: InitialType;
}

const initialState: IUser = {
  authToken: null,
  email: null,
  name: null,
  errors: null,
  id: null,
};

// eslint-disable-next-line default-param-last
const userReducer = (state = initialState, action: any): IUser => {
  switch (action.type) {
    case DELETE_USER:
      return {
        authToken: null,
        email: null,
        name: null,
        errors: null,
        id: null,
      };
    case SAVE_USER:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
