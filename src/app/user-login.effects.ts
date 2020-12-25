import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";

import { UserService } from "./core/services/user.service";

import {
  UserLoginActionTypes,
  AuthenticatedErrorAction,
  AuthenticatedSuccessAction,
  AuthenticationErrorAction,
  AuthenticationSuccessAction,
  SignOutErrorAction,
  SignOutSuccessAction
} from "./user-login.actions";


@Injectable()
export class UserLoginEffects {
  constructor(private actions$: Actions,
    private userService: UserService) { }

  @Effect()
  public authenticate: Observable<Action> = this.actions$.pipe(
    ofType(UserLoginActionTypes.AUTHENTICATE))
    .debounceTime(500)
    .switchMap((payload: any) => {
      return this.userService.authenticate(payload.payload.email, payload.payload.password)
        .map(user => new AuthenticationSuccessAction({ user: user }))
        .catch(error => Observable.of(new AuthenticationErrorAction({ error: error })));
    });

  @Effect()
  public authenticated: Observable<Action> = this.actions$.pipe
    (ofType(UserLoginActionTypes.AUTHENTICATED))
    .switchMap(payload => {
      return this.userService.authenticatedUser()
        .map(user => new AuthenticatedSuccessAction({ authenticated: (user && user !== null), user: user }))
        .catch(error => Observable.of(new AuthenticatedErrorAction({ error: error })));
    });

  @Effect()
  public signOut: Observable<Action> = this.actions$.pipe(
    ofType(UserLoginActionTypes.SIGN_OUT))
    .switchMap(payload => {
      return this.userService.signout()
        .map(value => new SignOutSuccessAction())
        .catch(error => Observable.of(new SignOutErrorAction({ error: error })));
    });

}
