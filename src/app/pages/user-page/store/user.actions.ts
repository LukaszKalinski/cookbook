import { Action } from '@ngrx/store';

export const LOGIN_USER = 'LOGIN_USER';

export class LoginUser implements Action {
  readonly type = LOGIN_USER;
  constructor(public payload: boolean) {}
}

export type UserActions = LoginUser;
