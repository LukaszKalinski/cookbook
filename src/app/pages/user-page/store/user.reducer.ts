import * as UserActions from './user.actions';

export interface State {
  user: string;
  isLogged: boolean;
}

const initialState: State = {
  user: null,
  isLogged: false,
};

export function userReducer(state: State = initialState, action: UserActions.UserActions) {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        isLogged: action.payload};
    default:
      return state;
  }
}
