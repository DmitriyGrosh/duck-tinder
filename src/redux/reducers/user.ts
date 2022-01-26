import { DELETE_USER, SAVE_USER } from '../actions/user';

export interface IUser {
  authToken: null | string;
  email: null | string;
  name: null | string;
}

const initialState: IUser = {
  authToken: null,
  email: null,
  name: null,
};

// eslint-disable-next-line default-param-last
const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case DELETE_USER:
      return {
        authToken: null,
        email: null,
        name: null,
      };
    case SAVE_USER:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
