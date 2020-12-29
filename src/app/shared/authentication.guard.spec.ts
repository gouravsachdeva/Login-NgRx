import { TestBed } from '@angular/core/testing';

import { AuthenticationGuard } from './authentication.guard';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route } from '@angular/router';
// import { Observable } from 'rxjs';
import { Store } from "@ngrx/store";
import * as RouterAction from './route-actions';

import { isAuthenticated, State } from "../state/reducers/root-reducers";

describe('AuthenticationGuard', () => {
  let guard: AuthenticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Store]
    });
    guard = TestBed.inject(AuthenticationGuard);
  });

  // it('should be created', () => {
  //   expect(guard).toBeTruthy();
  // });
});
