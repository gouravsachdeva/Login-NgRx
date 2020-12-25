import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { UserLoginEffects } from './user-login.effects';

describe('UserLoginEffects', () => {
  let actions$: Observable<any>;
  let effects: UserLoginEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserLoginEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(UserLoginEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
