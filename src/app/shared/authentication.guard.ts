import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from "@ngrx/store";
import * as RouterAction from './route-actions';

import { isAuthenticated, State } from "../reducers/index";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate, CanLoad {
  constructor(private store: Store<State>) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const observable = this.store.select(isAuthenticated);

    // redirect to sign in page if user is not authenticated
    observable.subscribe(authenticated => {
      if (!authenticated) {
        this.store.dispatch(new RouterAction.Go({ path: "/" }));
      }
    });

    return false;
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    const observable = this.store.select(isAuthenticated);
    observable.subscribe(authenticated => {
      if (!authenticated) {
        this.store.dispatch(new RouterAction.Go({ path: "/" }));
      }
    });

    return false;
  }

}
