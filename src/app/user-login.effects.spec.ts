import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { UserLoginEffects } from './user-login.effects';
import { UserService } from "./core/services/user.service";

describe('UserLoginEffects', () => {
  let actions$: Observable<any>;
  let effects: UserLoginEffects;
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserLoginEffects,
        UserService,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(UserLoginEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
