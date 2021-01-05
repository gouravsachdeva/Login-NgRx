import { TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { AuthenticationGuard } from './authentication.guard';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route } from '@angular/router';
// import { Observable } from 'rxjs';
import { Store, StoreModule } from '@ngrx/store';
import { reducer } from '../state/reducers/root-reducers';
import * as RouterAction from './route-actions';
import { RouterTestingModule } from '@angular/router/testing';
import { cold } from 'jasmine-marbles';

import { isAuthenticated, State } from '../state/reducers/root-reducers';

describe('AuthenticationGuard', () => {
  let guard: AuthenticationGuard;
  let store: MockStore;
  const initialState = { loggedIn: false };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Store,
        provideMockStore({ initialState }),
      ],
      imports: [RouterTestingModule, StoreModule.forRoot(reducer)],
    });
    store = TestBed.inject(MockStore);
    guard = TestBed.inject(AuthenticationGuard);
  });

  // it('should return false if the user state is not logged in', () => {
  //   const expected = cold('(a|)', { a: false });
  //   expect(guard.canActivate()).toBeObservable(expected);
  // });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
