import { Action } from '@ngrx/store';
import { User } from './core/models/user';

export enum UserLoginActionTypes {
  AUTHENTICATE = "[UserLogin] Authenticate",
  AUTHENTICATE_ERROR = "[UserLogin] Authentication error",
  AUTHENTICATE_SUCCESS = "[UserLogin] Authentication success",
  AUTHENTICATED = "[UserLogin] Authenticated",
  AUTHENTICATED_ERROR = "[UserLogin] Authenticated error",
  AUTHENTICATED_SUCCESS = "[UserLogin] Authenticated success",
  SIGN_OUT = "[UserLogin] Sign off",
  SIGN_OUT_ERROR = "[UserLogin] Sign off error",
  SIGN_OUT_SUCCESS = '[UserLogin] Sign off success'
}

export class AuthenticateAction implements Action {
  public type: string = UserLoginActionTypes.AUTHENTICATE;

  constructor(public payload: { email: string, password: string }) { }
}

export class AuthenticatedAction implements Action {
  public type: string = UserLoginActionTypes.AUTHENTICATED;

  constructor(public payload?: { token?: string }) { }
}

export class AuthenticatedSuccessAction implements Action {
  public type: string = UserLoginActionTypes.AUTHENTICATED_SUCCESS;

  constructor(public payload: { authenticated: boolean, user: User }) { }
}

export class AuthenticatedErrorAction implements Action {
  public type: string = UserLoginActionTypes.AUTHENTICATED_ERROR;

  constructor(public payload?: any) { }
}

export class AuthenticationErrorAction implements Action {
  public type: string = UserLoginActionTypes.AUTHENTICATE_ERROR;

  constructor(public payload?: any) { }
}

export class AuthenticationSuccessAction implements Action {
  public type: string = UserLoginActionTypes.AUTHENTICATE_SUCCESS;

  constructor(public payload: { user: User }) { }
}

export class SignOutAction implements Action {
  public type: string = UserLoginActionTypes.SIGN_OUT;
  constructor(public payload?: any) { }
}

export class SignOutErrorAction implements Action {
  public type: string = UserLoginActionTypes.SIGN_OUT_SUCCESS;
  constructor(public payload?: any) { }
}

export class SignOutSuccessAction implements Action {
  public type: string = UserLoginActionTypes.SIGN_OUT_SUCCESS;
  constructor(public payload?: any) { }
}


export type UserLoginActions = AuthenticateAction
  | AuthenticatedAction
  | AuthenticatedErrorAction
  | AuthenticatedSuccessAction
  | AuthenticationErrorAction
  | AuthenticationSuccessAction
  | SignOutAction
  | SignOutErrorAction
  | SignOutSuccessAction;

